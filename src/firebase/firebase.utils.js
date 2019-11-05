import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAe_WJVrB8QI3BWowf21RJFVPjUTDG1ecE',
  authDomain: 'crwn-db-2ae8c.firebaseapp.com',
  databaseURL: 'https://crwn-db-2ae8c.firebaseio.com',
  projectId: 'crwn-db-2ae8c',
  storageBucket: 'crwn-db-2ae8c.appspot.com',
  messagingSenderId: '498805757756',
  appId: '1:498805757756:web:28e3b23d225b8a2e633039'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
