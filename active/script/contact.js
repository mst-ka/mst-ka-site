'use strict';

//grab a emailForm
const emailForm = document.getElementById('email-form');
const applyForm = document.getElementById('apply-membership-form');

//create a functions to push
function firebaseEmailPush(input) {
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

function firebaseApplyPush(input) {
  // push to firebase database
  var mailsRef = firebase.database().ref('applications').push().set(
  {
    name: input['inputName'].value,
    mail: input['inputEmail'].value,
    phone: input['inputPhone'].value,
    age: input['inputAge'].value,
    school: input['inputHS'].value,
    rank: input['inputRank'].value,
    religion: input['inputReligion'].value,
    addr: input['inputAddress'].value,
    city: input['inputCity'].value,
    state: input['inputState'].value,
    zip: input['inputZip'].value,
    gpa: input['inputGPA'].value,
    tests: input['inputTestScore'].value,
    major: input['inputMajor'].value,
    activities: input['inputActivities'].value,
    honors: input['inputHnA'].value,
    goals: input['inputGoals'].value,
    contact: input['inputContact'].value,
    why: input['inputWhy'].value,
    likes: input['inputLikes'].value,
    gentleman: input['inputGentleman'].value,
  }
);
}

function onRecaptchaSuccess(response) {
  const submitBtn = document.getElementById('submitBtn');
  console.log(response);
  submitBtn.disabled = false;
}

// Snag emailForm data & push on submit
if (emailForm) {
  emailForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    //grab an input
    const input = {
      'inputName': emailForm.elements[0],
      'inputEmail':  emailForm.elements[1],
      'inputSubject': emailForm.elements[3],
      'inputMessage': emailForm.elements[4]
     };
    firebaseEmailPush(input);
    emailForm.reset();
    return false; // Prevents page refresh
  })
}

if (applyForm) {
  applyForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (isPassedCaptcha) {
      //grab an input
      const input = {
        'inputName': applyForm.elements[0],
        'inputEmail': applyForm.elements[1],
        'inputPhone': applyForm.elements[2],
        'inputAge': applyForm.elements[3],
        'inputHS': applyForm.elements[4],
        'inputRank': applyForm.elements[5],
        'inputReligion': applyForm.elements[6],
        // Address may be blank
        'inputAddress': applyForm.elements[7],
        'inputCity': applyForm.elements[8],
        'inputState': applyForm.elements[9],
        'inputZip': applyForm.elements[10],
        'inputGPA': applyForm.elements[11],
        'inputTestScore': applyForm.elements[12],
        'inputMajor': applyForm.elements[13],
        'inputActivities': applyForm.elements[14],
        'inputHnA': applyForm.elements[15],
        'inputGoals': applyForm.elements[16],
        'inputContact': applyForm.elements[17],
        'inputWhy': applyForm.elements[18],
        'inputLikes': applyForm.elements[19],
        'inputGentleman': applyForm.elements[20]
      };
      // firebaseApplyPush(input);
      applyForm.reset();
      return false;
    } else {
      console.log("FAILED CAPTCHA");
    }
  })
}
