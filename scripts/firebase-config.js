
  // Import the functions you need from the SDKs you need
  import {getFirestore} from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js'
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC2xWG0n3fgtOZP-A7EWGXzCKayzBuVQMs",
    authDomain: "pollingapp-4ea5d.firebaseapp.com",
    projectId: "pollingapp-4ea5d",
    storageBucket: "pollingapp-4ea5d.appspot.com",
    messagingSenderId: "619526709861",
    appId: "1:619526709861:web:6d0698504819585fb29c8c",
    measurementId: "G-DQ8X57JQ62"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  console.log('FireBase App is ', app);
  export const db = getFirestore(app);
  const analytics = getAnalytics(app);
