/** *************************************************
 * File: index.js
 * Description: Server Side listener for firebase
 *              database updates.
 **************************************************/

"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const applicationContactEmails = [
  "Joe Studer <joe.studer.18@gmail.com>",
  "Jared Hanisch <jared.hanisch@gmail.com>",
  "alv24@umsystem.edu", //Andersen Lohr    - President
  "twbyny@umsystem.edu", //Trey Brown       - Corresponding Secretary
  "pdpp88@umsystem.edu", //Paul Pham        - Recruitment Chairman
  "ceak3z@umsystem.edu", //Chris Altamirano - Recruitment Chairman
];

const email = (sender, receiver, message) => {
  const transporter = nodemailer.createTransport({
    service: "Zoho",
    auth: {
      user: functions.config().mail.login,
      pass: functions.config().mail.pass,
    },
  });

  const mailOptions = {
    from: sender,
    to: receiver,
    subject: message.subject,
    text: message.message,
    html: message.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error Sending Email: ${error}`);
    }
    console.log(`Message ID:  ${info.messageId}`);
  });
};

exports.onDataAddedApps = functions.database
  .ref("/applications/{sessionId}")
  .onCreate(function (snap, context) {
    // here we catch a new data, added to firebase database,
    // it stored in a snap variable
    const createdData = snap.val();
    let text = createdData;
    text.subject = `[MST-KA Website]: Membership Application for ${text.firstName} ${text.lastName}`;
    //prettier-ignore
    text.message = `Name: ${text.firstName} ${text.lastName}` + "<br/><br/>" +
                   "Phone: " + text.phone + "<br/><br/>" +
                   "Email: " + text.email + "<br/><br/>" +
                   `Address: ${text.address} ${text.city}, ${text.state} ${text.zip}` + "<br/><br/>" +
                   "Age: " + text.age + "<br/><br/>" +
                   "High School: " + text.highSchool + "<br/><br/>" +
                   "Class Rank: " + text.classRank + "<br/><br/>" +
                   "GPA: " + text.gpa + "<br/><br/>" +
                   "ACT/SAT: " + text.actSAT+ "<br/><br/>" +
                   "Religion: " + text.religion + "<br/><br/>" +
                   "Intended Major: " + text.intendedMajor + "<br/><br/>" +
                   "High School Activities: " + text.highSchoolActivities + "<br/><br/>" +
                   "Honors & Awards: " + text.honorsAwards + "<br/><br/>" +
                   "What are your goals for your first year of college?: " + text.goals + "<br/><br/>" +
                   "Who have you been in contact with at KA?: " + text.contactWith + "<br/><br/>" +
                   "Why are you considering KA?: " + text.whyConsidering + "<br/><br/>" +
                   "What do you like about our Chapter?: " + text.likeAboutChapter + "<br/><br/>" +
                   "How would you define a gentleman?: " + text.gentleman;

    console.log(`Sending application for ${text.firstName} ${text.lastName}`);
    // Send email with data
    email(functions.config().mail.login, applicationContactEmails, text);

    // Suppress warning of returning "Function returned undefined, expected Promise or value"
    return;
  });

const addNewSubscriber = (header, bodyContent, url) => {
  return fetch(`${url}/subscribers`, {
    method: "POST",
    headers: header,
    body: bodyContent,
  }).then((response) => {
    if (!response.ok) {
      if (response.status === 409) {
        throw new Error(`Status: ${response.status}, Email Already Exists`);
      } else {
        throw new Error(
          `HTTP Error while attempting to add new subscriber, Status: ${response.status}`
        );
      }
    }
    return response.json();
  });
};

const sendTransactionalEmail = (header, bodyContent, url) => {
  return fetch(`${url}/tx`, {
    method: "POST",
    headers: header,
    body: bodyContent,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(
        `HTTP Error while sending transactional email, Status: ${response.status}`
      );
    }
    return response.json();
  });
};

exports.onDataAddedNewsletter = functions.database
  .ref("/newsletterEmailSignUp/{sessionId}")
  .onCreate(function (snap, context) {
    const data = snap.val();
    let text = data;

    //prettier-ignore
    const headersList = {
      "Accept": "*/*",
      "Authorization": `${functions.config().listmonk.auth}`,
      "Content-Type": "application/json",
    };

    //prettier-ignore
    const addNewSubscriberBodyContent = JSON.stringify({
      "email": `${text.email}`,
      "name": `${text.firstName} ${text.lastName}`,
      "status": "enabled",
      "attribs": {
        "pledgeClass": parseInt(text.pledgeClass),
      },
      "lists": [1],
      "preconfirm_subscriptions": true
    });

    //prettier-ignore
    const transactionalMsgBodyContent = JSON.stringify({
      "subscriber_email": `${text.email}`,
      "template_id": 6,
      "data": {"lastName": `${text.lastName}`},
      "content_type": "html"
    });

    const baseAPIURL = "https://listmonk.mst-ka.org/api";

    console.log(
      `Attempting to add ${text.firstName} ${text.lastName}, PC ${text.pledgeClass}, Email: ${text.email} to Listmonk`
    );

    addNewSubscriber(headersList, addNewSubscriberBodyContent, baseAPIURL)
      .then((data) => {
        console.log(
          `Successfully added ${text.firstName} ${text.lastName} to Listmonk\n`,
          "Response:\n",
          data
        );
        // Sending Confirmation Email
        sendTransactionalEmail(
          headersList,
          transactionalMsgBodyContent,
          baseAPIURL
        )
          .then(() =>
            console.log(
              `Successfully Sent Transactional Confirmation Email to ${text.firstName} ${text.lastName} at ${text.email}`
            )
          )
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });

    return;
  });
