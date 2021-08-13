import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUGBaYRO0q31rmxvdAYKD5Kj-nJEktJB4",
  authDomain: "crwn-clothing-b58c5.firebaseapp.com",
  projectId: "crwn-clothing-b58c5",
  storageBucket: "crwn-clothing-b58c5.appspot.com",
  messagingSenderId: "927561584307",
  appId: "1:927561584307:web:24c3ade1c1b99322fb2ac6",
  measurementId: "G-EX3LME167L",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
