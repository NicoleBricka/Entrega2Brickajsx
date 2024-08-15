import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAecLZon7W-2ijZmK4paacOlHuaE2XvJEQ",
    authDomain: "react-flexbrick-62325.firebaseapp.com",
    projectId: "react-flexbrick-62325",
    storageBucket: "react-flexbrick-62325.appspot.com",
    messagingSenderId: "365433478148",
    appId: "1:365433478148:web:be04946b2b82e855fba951"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };