const firebaseConfig = {
  apiKey: "AIzaSyBeKXupGKDgdyMLPePfckRr-UXWbtlSzfI",
  authDomain: "contactform-83202.firebaseapp.com",
  databaseURL: "https://contactform-83202-default-rtdb.firebaseio.com",
  projectId: "contactform-83202",
  storageBucket: "contactform-83202.appspot.com",
  messagingSenderId: "356913690150",
  appId: "1:356913690150:web:c0a5bdd53fade533e358e7"
};
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
