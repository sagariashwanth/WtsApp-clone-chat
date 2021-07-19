import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc5CgQlYxyZF2AJTFCTH2x-7EA1OotWJA",
  authDomain: "whatsapp-clone-72e21.firebaseapp.com",
  projectId: "whatsapp-clone-72e21",
  storageBucket: "whatsapp-clone-72e21.appspot.com",
  messagingSenderId: "90346995054",
  appId: "1:90346995054:web:41b2a16bd7eda7da75157f",
  measurementId: "G-ZR3DTM9JK2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
