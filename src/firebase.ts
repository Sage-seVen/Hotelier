import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import { functions } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnDlkgnFqDS7l9DiVc8bUdGzWgPD5aSzE",
  authDomain: "hotelier-db52e.firebaseapp.com",
  projectId: "hotelier-db52e",
  storageBucket: "hotelier-db52e.appspot.com",
  messagingSenderId: "65692481506",
  appId: "1:65692481506:web:b36bc13b9572d903e42bbb",
  measurementId: "G-PE2BPWKEMW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/*const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};*/
