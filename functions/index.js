/** *************************************************
 * File: index.js
 * Description: Server Side listener for firebase
 *              database updates.
 **************************************************/

"use strict";

const { onValueCreated } = require("firebase-functions/v2/database");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const constants = require("./constants");

const MAIL_LOGIN = defineSecret("MAIL_LOGIN");
const MAIL_PASS = defineSecret("MAIL_PASS");
const LISTMONK_AUTH = defineSecret("LISTMONK_AUTH");

admin.initializeApp();

const email = (sender, receiver, message) => {
  const transporter = nodemailer.createTransport({
    service: "Zoho",
    auth: {
      user: MAIL_LOGIN.value(),
      pass: MAIL_PASS.value(),
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

const applicationContactEmails = [
  "Joe Studer <joe.studer.18@gmail.com>",
  "Jared Hanisch <jared.hanisch@gmail.com>",
  "Christian Matoushek <christian.matoushek@gmail.com",
  "bcdkcd@mst.edu",     // Brady Dodd     - President
  "nb887@mst.edu",      // Noah Bauman    - Corresponding Secretary
  "lgqkb@umsystem.edu", // Luke Gerling   - Recruitment Chairman
  "jfxnh@umsystem.edu", // Joshua Fallert - Recruitment Chairman
];

exports.onDataAddedApps = onValueCreated(
  { ref: "/applications/{sessionId}", secrets: [MAIL_LOGIN, MAIL_PASS] },
  (event) => {
    const snap = event.data;
    //prettier-ignore
    const emailContent = {
      subject: `[MST-KA Website]: Membership Application for ${snap.val().firstName} ${snap.val().lastName}`,
      message: `Name: ${snap.val().firstName} ${snap.val().lastName}<br/><br/>
                Phone: ${snap.val().phone}<br/><br/>
                Email: ${snap.val().email}<br/><br/>
                Hometown: ${snap.val().hometown}, ${snap.val().state}<br/><br/>
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
    email(MAIL_LOGIN.value(), applicationContactEmails, emailContent);

    return null;
  }
);

const alumniSpotlightContactEmails = [
  "Joe Studer <joe.studer.18@gmail.com>",
  "Jared Hanisch <jared.hanisch@gmail.com>",
  "Christian Matoushek <christian.matoushek@gmail.com",
  "betaalphaalumni1903@gmail.com",
];

exports.onDataAddedSpotlight = onValueCreated(
  { ref: "/alumniSpotlight/{sessionId}", secrets: [MAIL_LOGIN, MAIL_PASS] },
  (event) => {
    const snap = event.data;
    //prettier-ignore
    const emailContent = {
      subject: `[MST-KA Website] Alumni Spotlight Recommendation for ${snap.val().recFullName}`,
      message: `Recommended By:<br/>
                ${snap.val().yourFullName}<br/>
                ${snap.val().yourPhoneNumber}<br/>
                ${snap.val().yourEmail}<br/><br/>
                Recommended Brother's Information:<br/>
                ${snap.val().recFullName}<br/>
                ${snap.val().recPhoneNumber}<br/>
                ${snap.val().recEmail}<br/><br/>
                Testimonial:<br/>
                ${snap.val().whyRecommended}`
    };

    console.log(
      `Sending Alumni Spotlight Recommendation for ${
        snap.val().recFullName
      } from ${snap.val().yourFullName}`
    );

    email(MAIL_LOGIN.value(), alumniSpotlightContactEmails, emailContent);

    return null;
  }
);

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

exports.onDataAddedNewsletter = onValueCreated(
  { ref: "/newsletterEmailSignUp/{sessionId}", secrets: [LISTMONK_AUTH] },
  (event) => {
    const snap = event.data;
    const headersList = {
      Accept: "*/*",
      Authorization: `${LISTMONK_AUTH.value()}`,
      "Content-Type": "application/json",
    };

    console.log(`Attemping to add: ${JSON.stringify(snap.val())}`);

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

    return addNewSubscriber(
      headersList,
      addNewSubscriberBodyContent,
      constants.BASE_API_URL
    )
      .then((data) => {
        console.log(
          `Successfully added ${snap.val().firstName} ` +
            `${snap.val().lastName} to Listmonk\n`,
          "Response:\n",
          data
        );

        return sendTransactionalEmail(
          headersList,
          transactionalMsgBodyContent,
          constants.BASE_API_URL
        )
          .then(() =>
            console.log(
              "Successfully Sent Transactional Confirmation Email to " +
                `${snap.val().firstName} ${snap.val().lastName} at ` +
                `${snap.val().email}`
            )
          )
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }
);
