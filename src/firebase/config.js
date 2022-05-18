// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC58ltzg2Ec7L4LXcWG0AYFfM5OsG676Eg',
  authDomain: 'photo-contest-553d1.firebaseapp.com',
  projectId: 'photo-contest-553d1',
  storageBucket: 'photo-contest-553d1.appspot.com',
  messagingSenderId: '261969680823',
  appId: '1:261969680823:web:a63350df868f7555247032',
  measurementId: 'G-3XQR8YC7XR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
