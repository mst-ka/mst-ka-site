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

//TODO: Update contactEmails to include the IV, Recruitment chairs, Joe, and Jared, before deploying to prod
const contactEmails = ["Jared Hanisch <jared.hanisch@gmail.com>"];

let email = function (sender, message) {
  const transporter = nodemailer.createTransport({
    service: "Zoho",
    auth: {
      user: functions.config().mail.login,
      pass: functions.config().mail.pass,
    },
  });

  const mailOptions = {
    from: sender,
    to: contactEmails,
    subject: "[MST-KA Website]: " + message.subject,
    text: message.message,
    html: message.message,
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message Sent: %s", info.messageId);
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};

exports.onDataAddedApps = functions.database
  .ref("/applications/{sessionId}")
  .onCreate(function (snap, context) {
    // here we catch a new data, added to firebase database,
    // it stored in a snap variable
    const createdData = snap.val();
    var text = createdData;
    text.subject = "BAofKA Membership Application";
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
    email(functions.config().mail.login, text);

    // Suppress warning of returning "Function returned undefined, expected Promise or value"
    // by returning a dummy value that is not used.
    return 0;
  });
