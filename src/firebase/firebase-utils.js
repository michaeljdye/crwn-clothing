import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCoBGyNLvr-VUdHyrbURkXcdJ3nTKrWCCY',
  authDomain: 'crwn-db-9cf78.firebaseapp.com',
  databaseURL: 'https://crwn-db-9cf78.firebaseio.com',
  projectId: 'crwn-db-9cf78',
  storageBucket: '',
  messagingSenderId: '582545106145',
  appId: '1:582545106145:web:a384e7194bf4a7b3',
};

// Initialize Firebase with config
firebase.initializeApp(config);

// Initialize auth
export const auth = firebase.auth();

// Initialize Firestore
export const firestore = firebase.firestore();

// Initialize Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export sign out method
export const signOut = () => auth.signOut();

// Create user profile doc
export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return null;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error('Error creating user', error);
    }
  }

  return userRef;
};

export default firebase;
