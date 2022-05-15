import firebase  from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
const app = firebase.initializeApp({
  apiKey: "AIzaSyDQeNKNCHvyyEWLc_ko3V_dW2RmL_bPbQs",

  authDomain: "kickit-9e2da.firebaseapp.com",

  projectId: "kickit-9e2da",

  storageBucket: "kickit-9e2da.appspot.com",

  messagingSenderId: "284693437266",

  appId: "1:284693437266:web:3ca418c0ebc439764fb88b",

  measurementId: "G-RJJGHRTVG3"


});
export default app;
export const auth = firebase.auth(app);
export var database=firebase.database();