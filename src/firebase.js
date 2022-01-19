import {initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDF0TL-80zNfWGnCNnDhdw_mLrh7FbNDqM",
    authDomain: "qwertyuiop-b1b4d.firebaseapp.com",
    projectId: "qwertyuiop-b1b4d",
    storageBucket: "qwertyuiop-b1b4d.appspot.com",
    messagingSenderId: "92718974357",
    appId: "1:92718974357:web:f8bc564858855be593e29c",
    measurementId: "G-P3BJR4VT61"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage()
export {app, db, storage}
