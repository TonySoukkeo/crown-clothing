import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBLQbnOBMr7pv7bHeVoVwWdGGTT3i7kO-k",
  authDomain: "crown-db-d3648.firebaseapp.com",
  databaseURL: "https://crown-db-d3648.firebaseio.com",
  projectId: "crown-db-d3648",
  storageBucket: "crown-db-d3648.appspot.com",
  messagingSenderId: "636176816129",
  appId: "1:636176816129:web:39501aa176f022796bc800",
  measurementId: "G-8NP01TNC69",
};

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
    } catch (err) {
      console.log("error creating users", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;