// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDi--UUqw0DCyMSeuM7VeHGV3io_f8qGVw",
  authDomain: "clone-6b047.firebaseapp.com",
  databaseURL: "https://clone-6b047.firebaseio.com",
  projectId: "clone-6b047",
  storageBucket: "clone-6b047.appspot.com",
  messagingSenderId: "975682317224",
  appId: "1:975682317224:web:a7394ea926946fc3560b9d",
  measurementId: "G-TPXD43QDR6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
