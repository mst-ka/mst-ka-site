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
    text.subject = "testing";
    text.message =  "First Name: " + text.firstName + "<br/><br/>" +
                    "Last Name: " + text.lastName + "<br/><br/>" +
                    "Phone: " + text.phone + "<br/><br/>" +
                    "Email: " + text.email
      // "Name: " + text.name + "<br/><br/>" +
      // "Email: " + text.mail + "<br/><br/>" +
      // "Age: " + text.age + "<br/><br/>" +
      // "Address: " + text.addr + "<br/><br/>" + 
      // "City: " + text.city + "<br/><br/>" +
      // "State: " + text.state + "<br/><br/>" +
      // "Zip: " + text.zip + "<br/><br/>" +
      // "Phone: " + text.phone + "<br/><br/>" +
      // "High School: " + text.school + "<br/><br/>" +
      // "Religion: " + text.religion + "<br/><br/>" +
      // "GPA: " + text.gpa + "<br/><br/>" +
      // "Class Rank: " + text.rank + "<br/><br/>" +
      // "ACT/SAT: " + text.tests + "<br/><br/>" +
      // "Intended Major: " + text.major + "<br/><br/>" +
      // "Honors and Awards: " + text.honors + "<br/><br/>" +
      // "What are your goals for your first year of college: " + text.goals + "<br/><br/>" +
      // "Who have you been in contact with at KA: " + text.contact + "<br/><br/>" +
      // "Why are you considering KA: " + text.why + "<br/><br/>" +
      // "What do you like about our Chapter: " + text.likes + "<br/><br/>" +
      // "How would you define a gentleman: " + text.gentleman + "<br/><br/>" +
      // "High School Activities: " + text.activities + "<br/><br/>";

    //here we send new data using function for sending emails
    email(functions.config().mail.login, text);
  });
