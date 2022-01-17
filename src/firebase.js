import {initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCtY6oVoqSluM3x5Y4Goxm-gBF4myGSvwY",
    authDomain: "snake-8c1f2.firebaseapp.com",
    projectId: "snake-8c1f2",
    storageBucket: "snake-8c1f2.appspot.com",
    messagingSenderId: "1009187189201",
    appId: "1:1009187189201:web:63ddda79d620b8f694b0f0",
    measurementId: "G-VV4PMSDWQT"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage()
export {app, db, storage}