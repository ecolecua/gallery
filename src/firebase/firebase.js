// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ||
    'AIzaSyC58ltzg2Ec7L4LXcWG0AYFfM5OsG676Eg',
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
    'photo-contest-553d1.firebaseapp.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'photo-contest-553d1',
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
    'photo-contest-553d1.appspot.com',
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '261969680823',
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ||
    '1:261969680823:web:a63350df868f7555247032',
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || 'G-3XQR8YC7XR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
