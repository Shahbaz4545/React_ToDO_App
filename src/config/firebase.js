import * as firebase from 'firebase/app';
import  'firebase/database';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBy4ZYVqkipr4W_WwBhFaaLZgHZJ9oehCI",
    authDomain: "onlinemoblieapp.firebaseapp.com",
    databaseURL: "https://onlinemoblieapp.firebaseio.com",
    projectId: "onlinemoblieapp",
    storageBucket: "onlinemoblieapp.appspot.com",
    messagingSenderId: "8466787247",
    appId: "1:8466787247:web:12906f50f3a10e51975d5a",
    measurementId: "G-EJP117K3SL"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

