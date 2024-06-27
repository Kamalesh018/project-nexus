import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWsuJ95yZ6S7Yw2ONtdnpcW2ne4s71Yfc",
  authDomain: "grantlogin-eb1f4.firebaseapp.com",
  projectId: "grantlogin-eb1f4",
  storageBucket: "grantlogin-eb1f4.appspot.com",
  messagingSenderId: "356031464034",
  appId: "1:356031464034:web:63ca9d00f382bf66e4873b",
};

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Creating Account.....");
        //...
      })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        //..
      });
  });
});
 
