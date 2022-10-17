// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAmfv0txFUMiBXIeOnpd4jmZsMepoUiQNU',
    authDomain: 'bangla-times-news.firebaseapp.com',
    projectId: 'bangla-times-news',
    storageBucket: 'bangla-times-news.appspot.com',
    messagingSenderId: '290942577671',
    appId: '1:290942577671:web:0d66b6e1487329c0684ea2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
