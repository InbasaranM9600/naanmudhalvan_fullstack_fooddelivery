import {getApp, getApps, initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";





const firebaseConfig = {
    apiKey: "AIzaSyCUzW28cr1QOpItj12SA_hBKVn1d2jTW60",
    authDomain: "fullstack-food-app-dd8f7.firebaseapp.com",
    projectId: "fullstack-food-app-dd8f7",
    storageBucket: "fullstack-food-app-dd8f7.appspot.com",
    messagingSenderId: "391499505910",
    appId: "1:391499505910:web:4adb9de9d9b3d4c2660cd7"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export {app, storage};
