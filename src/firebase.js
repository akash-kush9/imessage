import firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyB14RL1s68kbqSrsseygGIbkWR867doRkc",
    authDomain: "imessage-clone-3ab1d.firebaseapp.com",
    databaseURL: "https://imessage-clone-3ab1d.firebaseio.com",
    projectId: "imessage-clone-3ab1d",
    storageBucket: "imessage-clone-3ab1d.appspot.com",
    messagingSenderId: "389822526824",
    appId: "1:389822526824:web:3b3d571f997246eaa652dd",
    measurementId: "G-XD325G166Y"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth,googleProvider};
