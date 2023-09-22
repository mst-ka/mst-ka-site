/** *************************************************
 * File: index.js
 * Description: Server Side listener for firebase
 *              database updates.
 **************************************************/

"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const constants = require("./constants");

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
    //prettier-ignore
    const emailContent = {
      ...snap.val(),
      subject: `[MST-KA Website]: Membership Application for ${snap.val().firstName} ${snap.val().lastName}`,
      message: `Name: ${snap.val().firstName} ${snap.val().lastName}<br/><br/>
                Phone: ${snap.val().phone}<br/><br/>
                Email: ${snap.val().email}<br/><br/>
                Address: ${snap.val().address} ${snap.val().city}, ${snap.val().state} ${snap.val().zip}<br/><br/>
                Age: ${snap.val().age}<br/><br/>
                High School: ${snap.val().highSchool}<br/><br/>
                Class Rank: ${snap.val().classRank}<br/><br/>
                GPA: ${snap.val().gpa}<br/><br/>
                ACT/SAT: ${snap.val().actSAT}<br/><br/>
                Religion: ${snap.val().religion}<br/><br/>
                Intended Major: ${snap.val().intendedMajor}<br/><br/>
                High School Activities: ${snap.val().highSchoolActivities}<br/><br/>
                Honors & Awards: ${snap.val().honorsAwards}<br/><br/>
                What are your goals for your first year of college?: ${snap.val().goals}<br/><br/>
                Who have you been in contact with at KA?: ${snap.val().contactWith}<br/><br/>
                Why are you considering KA?: ${snap.val().whyConsidering}<br/><br/>
                What do you like about our Chapter?: ${snap.val().likeAboutChapter}<br/><br/>
                How would you define a gentleman?: ${snap.val().gentleman}`,
    };

    console.log(
      `Sending application for ${snap.val().firstName} ${snap.val().lastName}`
    );
    // Send email with data
    email(
      functions.config().mail.login,
      applicationContactEmails,
      emailContent
    );

    // Suppress warning of returning "Function returned undefined, expected Promise or value"
    return;
  });

const addNewSubscriber = (header, bodyContent, url) =>
  fetch(`${url}/subscribers`, {
    method: "POST",
    headers: header,
    body: bodyContent,
  }).then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`addNewSubscriber Response:\n${text}`);
      });
    }
    return response.json();
  });

const sendTransactionalEmail = (header, bodyContent, url) =>
  fetch(`${url}/tx`, {
    method: "POST",
    headers: header,
    body: bodyContent,
  }).then((response) => {
    if (!response.ok) {
      return response.text().then((text) => {
        throw new Error(`sendTransactionalEmail Response:\n${text}`);
      });
    }
    return response.json();
  });

exports.onDataAddedNewsletter = functions.database
  .ref("/newsletterEmailSignUp/{sessionId}")
  .onCreate(function (snap, context) {
    const headersList = {
      Accept: "*/*",
      Authorization: `${functions.config().listmonk.auth}`,
      "Content-Type": "application/json",
    };

    const addNewSubscriberBodyContent = JSON.stringify({
      email: `${snap.val().email}`,
      name: `${snap.val().firstName} ${snap.val().lastName}`,
      status: "enabled",
      attribs: {
        pledgeClass: parseInt(snap.val().pledgeClass),
      },
      lists: [1],
      preconfirm_subscriptions: true,
    });

    const transactionalMsgBodyContent = JSON.stringify({
      subscriber_email: `${snap.val().email}`,
      template_id: 6,
      data: { lastName: `${snap.val().lastName}` },
      content_type: "html",
    });

    addNewSubscriber(
      headersList,
      addNewSubscriberBodyContent,
      constants.BASE_API_URL
    )
      .then((data) => {
        console.log(
          `Successfully added ${snap.val().firstName} 
          ${snap.val().lastName} to Listmonk\n`,
          "Response:\n",
          data
        );

        sendTransactionalEmail(
          headersList,
          transactionalMsgBodyContent,
          constants.BASE_API_URL
        )
          .then(() =>
            console.log(
              `Successfully Sent Transactional Confirmation Email to 
              ${snap.val().firstName} ${snap.val().lastName} at 
              ${snap.val().email}`
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
