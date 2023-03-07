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

const applicationContactEmails = ["Jared Hanisch <jared.hanisch@gmail.com>"];

let email = function (sender, receiver, message) {
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
      console.error("Error: " + error);
    }
    console.log("Envelope: " + JSON.stringify(info.envelope));
    console.log("Message ID: " + info.messageId);
  });
};

exports.onDataAddedApps = functions.database
  .ref("/applications/{sessionId}")
  .onCreate(function (snap, context) {
    // here we catch a new data, added to firebase database,
    // it stored in a snap variable
    const createdData = snap.val();
    var text = createdData;
    text.subject = `[MST-KA Website]: BAofKA Membership Application for ${text.firstName} ${text.lastName}`;
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

exports.onDataAddedNewsletter = functions.database
  .ref("/newsletterEmailSignUp/{sessionId}")
  .onCreate(function (snap, context) {
    const data = snap.val();
    let text = data;
    text.subject = "Thanks for Signing-up to Receive The BAAA Journal!";
    text.message = `Brother ${text.lastName}, <br/><br/> This is a test, here are the rest of the fields <br/><br/>
                    First Name: ${text.firstName}<br/><br/>
                    Pledge Class: ${text.pledgeClass}<br/><br/>
                    Email: ${text.email}`;
    console.log(
      `Sending welcome email to ${text.firstName} ${text.lastName} at ${text.email}`
    );
    email(functions.config().mail.login, `${text.email}`, text);

    return;
  });
