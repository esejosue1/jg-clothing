import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

    
const config ={
    apiKey: "AIzaSyAMg5w3B8-AJe66iGvPNkUwLBv4NwFOjfk",
    authDomain: "jg-clothing.firebaseapp.com",
    projectId: "jg-clothing",
    storageBucket: "jg-clothing.appspot.com",
    messagingSenderId: "893447692554",
    appId: "1:893447692554:web:6ff08d9c15ffd8479b9af3",
    measurementId: "G-9W03YTLB2E"
  }

  export const createUserProfileDocument = async (userAuth, additionalData)=>
  {
    if (!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();
  
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      // if the user ref is not in the firestore databse,we will create a new object with its info and added to the database
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

//   firebase authentication access
  export const auth = firebase.auth();
//  firebase store
  export const firestore = firebase.firestore();

  //firebase authentication utility
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;