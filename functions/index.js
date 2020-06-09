/***************************************************
 * File: index.js
 * Description: Server Side listener for firebase
 *              database updates.
 **************************************************/

'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const gmailUser = functions.config().gmail.login;
const gmailPass = functions.config().gmail.pass;

const contactEmails = ['Joe Studer <joe.studer.18@gmail.com>'];

var email = function(message) {
  console.log("user: %s", gmailUser);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass
    }
  });

  const mailOptions = {
    from: gmailUser,
    to: contactEmails,
    subject: '[MST-KA Website]: ' + message.subject,
    text: message.message,
    html: message.message
  };
   
  const getDeliveryStatus = function(error, info) {
    if (error) {return console.log(error);}
    console.log('Message Sent: %s', info.messageId);
  };
  transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.onDataAdded is watches for changes in database
exports.onDataAdded = functions.database.ref('/messages/{sessionId}').onCreate(function (snap, context) {
    //here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.val();
    var text = createdData;

    //here we send new data using function for sending emails
    email(text);
});
