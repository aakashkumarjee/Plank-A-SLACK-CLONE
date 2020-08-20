import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBJeWenNupS2cy0RW5a41lck0ou7LRgZfs",
  authDomain: "planck-1562a.firebaseapp.com",
  databaseURL: "https://planck-1562a.firebaseio.com",
  projectId: "planck-1562a",
  storageBucket: "planck-1562a.appspot.com",
  messagingSenderId: "35453314278",
  appId: "1:35453314278:web:b2c3ffc713de2085c8c727",
  measurementId: "G-CTFGT988KZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;