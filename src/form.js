import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBRANOBMKRAd6S1B2AvVASasPQBNwsZ3Is",
  authDomain: "balalike-78078.firebaseapp.com",
  databaseURL:
    "https://balalike-78078-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "balalike-78078",
  storageBucket: "balalike-78078.appspot.com",
  messagingSenderId: "624521976744",
  appId: "1:624521976744:web:56d668c2676633c923db9d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("reg-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "inline";
  document.getElementById("login-div").style.display = "none";
});
document.getElementById("log-btn").addEventListener("click", function () {
  document.getElementById("register-div").style.display = "none";
  document.getElementById("login-div").style.display = "inline";
});

document.getElementById("login-btn").addEventListener("click", function () {
const loginEmail = document.getElementById("login-mail").value;
const loginPassWord = document.getElementById("login-password").value;

signInWithEmailAndPassword(auth, loginEmail, loginPassWord)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display = "inline";
    document.getElementById("login-div").style.display = "none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"was login succes";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display = "inline";
    document.getElementById("login-div").style.display = "none";
    document.getElementById("result").innerHTML="Sorry<br>"+errorMessage;
    
  });

  

});

document.getElementById("register-btn").addEventListener("click", function () {
  const registerEmail = document.getElementById("reg-mail").value;
  const registerPassWord = document.getElementById("reg-password").value;
  
  createUserWithEmailAndPassword(auth, registerEmail, registerPassWord)
    .then((userCredential) => {
      const user = userCredential.user;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML="Welcome<br>"+registerEmail+"was registered succes";
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display = "inline";
      document.getElementById("register-div").style.display = "none";
      document.getElementById("result").innerHTML="Sorry<br>"+errorMessage;
      
    });
  
    
  
  });