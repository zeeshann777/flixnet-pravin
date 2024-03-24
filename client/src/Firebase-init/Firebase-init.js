// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_N_c6U_8br3N5XzcdzXeqayKAsd8apR0",
    authDomain: "pravin-netflix-da3f3.firebaseapp.com",
    projectId: "pravin-netflix-da3f3",
    storageBucket: "pravin-netflix-da3f3.appspot.com",
    messagingSenderId: "931773491182",
    appId: "1:931773491182:web:742433ac54727492f8d0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const login = async (email, password) => {
    const auth = getAuth();
    const usercred = await signInWithEmailAndPassword(auth, email, password);
    return usercred;
}

export {login}