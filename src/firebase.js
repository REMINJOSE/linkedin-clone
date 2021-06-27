import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSvYvkxE8LCqNwHmfGOPRKlGIu9hj28EM",
    authDomain: "linkedin-clone-6ed54.firebaseapp.com",
    projectId: "linkedin-clone-6ed54",
    storageBucket: "linkedin-clone-6ed54.appspot.com",
    messagingSenderId: "652811501214",
    appId: "1:652811501214:web:ba536c684c97412627458f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};