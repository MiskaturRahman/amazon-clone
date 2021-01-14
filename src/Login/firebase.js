import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAGGqI_bpEccUwibtcpHugW6mtfutX4ghQ",
    authDomain: "ema-john-ecommerce-bymiskat.firebaseapp.com",
    projectId: "ema-john-ecommerce-bymiskat",
    storageBucket: "ema-john-ecommerce-bymiskat.appspot.com",
    messagingSenderId: "1090334348895",
    appId: "1:1090334348895:web:da1566f2d4a0b36ce4edea",
    measurementId: "G-5WMZG19Y9K"
});


const auth = firebase.auth();

export { auth };