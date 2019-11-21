firebase.initializeApp({
  apiKey: "AIzaSyCPtKpSrk5nE7G4VAVhvlTt6kI4mKlqZVo",
  authDomain: "landing-page-3c0c7.firebaseapp.com",
  databaseURL: "https://landing-page-3c0c7.firebaseio.com",
  projectId: "landing-page-3c0c7",
  storageBucket: "landing-page-3c0c7.appspot.com",
  messagingSenderId: "164116629047",
  appId: "1:164116629047:web:f4a5a9e95154a62784e1b2",
  measurementId: "G-5YQFK11QZJ"
});

function doSignup(form, email) {
  console.log("signingup");
  var $form = $(form);
  $form.find("button").attr("disabled", true);

  firebase
    .database()
    .ref()
    .child("signups")
    .push({
      email: email
    });
  form.email.value = "";

  $form.find("button").attr("disabled", false);
  $form.find("p[data-name=success]").text("Thanks for signing up!");
}

function signup(form) {
  var $form = $(form),
    email = form.email.value.trim();

  if (email !== "") {
    doSignup(form, email);
  }

  return false;
}
