import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCSXzg-a98wAek2TvsSEZ_cbxAwe-DW6wo',
  authDomain: 'clarity-fireshare.firebaseapp.com',
  databaseURL: 'https://clarity-fireshare.firebaseio.com',
  projectId: 'clarity-fireshare',
  storageBucket: 'clarity-fireshare.appspot.com',
  messagingSenderId: '726159927327',
  appId: '1:726159927327:web:745c7e326a257e4a12cd2a',
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
