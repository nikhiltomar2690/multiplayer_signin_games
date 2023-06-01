    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  import {getAuth, GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  const googlesignin = document.getElementsByClassName('googlesign')[0];
  const otpsign = document.getElementsByClassName('otpsign');

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBD_jzZSKKe-rNX6VWzQVoAciqDzUR6-So",
    authDomain: "multiplayer-project-36b48.firebaseapp.com",
    projectId: "multiplayer-project-36b48",
    storageBucket: "multiplayer-project-36b48.appspot.com",
    messagingSenderId: "26027982974",
    appId: "1:26027982974:web:4677d3a80b236c153c182f",
    measurementId: "G-EMKWDXJ7SR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  const provider = new GoogleAuthProvider();
  console.log(provider);

  googlesignin.addEventListener('click',function(){
    signInWithPopup(auth,provider)
    .then((result)=> {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // the signed user info
        const user = result.user;
        alert("Welcome" + user.displayName);
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        const email  =error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
  });