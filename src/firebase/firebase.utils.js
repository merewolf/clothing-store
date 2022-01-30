import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCQ4y6w98mFw4YRVYpCXRjXiQ5EaVxBojM',
  authDomain: 'react-shop-db-6b9a5.firebaseapp.com',
  projectId: 'react-shop-db-6b9a5',
  storageBucket: 'react-shop-db-6b9a5.appspot.com',
  messagingSenderId: '1022721301696',
  appId: '1:1022721301696:web:c7402d4d8241fbaec52125',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
