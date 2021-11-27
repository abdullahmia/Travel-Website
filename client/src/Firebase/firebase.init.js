import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAnOigwDnMcpxMilbB0H14jjbZdxsH3gvI",
  authDomain: "travel-web-application.firebaseapp.com",
  projectId: "travel-web-application",
  storageBucket: "travel-web-application.appspot.com",
  messagingSenderId: "609458009041",
  appId: "1:609458009041:web:60345441b9d292fe4f26f0"
};

const firebaseInitapp = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitapp;