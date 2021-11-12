import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyCmueW2IvbcPMzyJbB2b_yu6s3Qk3WPpd4',
  authDomain: 'lets-ride-bcfb3.firebaseapp.com',
  projectId: 'lets-ride-bcfb3',
  storageBucket: 'lets-ride-bcfb3.appspot.com',
  messagingSenderId: '550604979251',
  appId: '1:550604979251:web:428a5c954807496651f746',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.firestore();
