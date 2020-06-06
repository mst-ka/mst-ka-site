'use strict';

//grab a form
const form = document.getElementById('main-contact-form')

//create a functions to push
function firebasePush(input) {
  // push to firebase database
  var mailsRef = firebase.database().ref('messages').push().set(
  {
    name: input['inputName'].value,
    mail: input['inputEmail'].value,
    subject: input['inputSubject'].value,
    message: input['inputMessage'].value
  }
  );
}

// Snag form data & push on submit
if (form) {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    //grab an input
    const input = {
      'inputName': form.elements[0],
      'inputEmail':  form.elements[1],
      'inputSubject': form.elements[3],
      'inputMessage': form.elements[4]
     };
    firebasePush(input);
    form.reset();
    return false; // Prevents page refresh
  })
}
