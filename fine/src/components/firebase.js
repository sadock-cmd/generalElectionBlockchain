// For Firebase JS SDK v7.20.0 and later, measurementId is optional...this is og
import firebase from 'firebase'
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCTnI8AA6sHYe3jXstt7CLGqTmJdVKChnA",
  authDomain: "blockvote-188bf.firebaseapp.com",
  databaseURL: "https://blockvote-188bf-default-rtdb.firebaseio.com",
  projectId: "blockvote-188bf",
  storageBucket: "blockvote-188bf.appspot.com",
  messagingSenderId: "99870551499",
  appId: "1:99870551499:web:52795483eef04f0bae1a4e",
  measurementId: "G-VXY1CN9JGH",
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase