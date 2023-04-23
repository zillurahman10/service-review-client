// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD68Kz8mSDRKwUawu6o4Qec1m4xHQ3QqqY",
    authDomain: "zillur-yt.firebaseapp.com",
    projectId: "zillur-yt",
    storageBucket: "zillur-yt.appspot.com",
    messagingSenderId: "999771058543",
    appId: "1:999771058543:web:418eed1242551fe0be789a",
    measurementId: "G-W7X134TJ50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;