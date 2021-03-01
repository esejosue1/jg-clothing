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

  firebase.initializeApp(config);

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

  export const addCollectionAndDocument = async (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);

  //fire one big set since firabase only allows to shot a set one at a time
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) =>{    //call the func instead of new array
    const newDocRef = collectionRef.doc();  //doc at empry string, new doc reference and id
    batch.set(newDocRef, obj);
  });

  return await batch.commit()
  }

  //convert the data into an array of objects instead of array
  export const convertCollectionsSnapchotToMap =(collections)=>{
    const transformedCollection = collections.docs.map(doc =>{
      const {title, items} = doc.data();
      //final shape of the object we want
      return {
        //pass some string that the url cant hanle such as symbols
        routeName:encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
    console.log(transformedCollection)
    //pass in the initial object, empty oject property with hats in lowercase =  hats.collection
    return transformedCollection.reduce((accumulator, collection) =>{
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  //return the user auth promise to verify the users authentication session
  export const getCurrentUser = () =>{
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth =>{
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }

//   firebase authentication access
  export const auth = firebase.auth();
//  firebase store
  export const firestore = firebase.firestore();

  //firebase authentication utility
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;