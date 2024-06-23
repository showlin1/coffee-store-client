// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfjxnolkNpFDFKyRJhvZr9N0lt7FD5X18",
    authDomain: "coffee-store-af53d.firebaseapp.com",
    projectId: "coffee-store-af53d",
    storageBucket: "coffee-store-af53d.appspot.com",
    messagingSenderId: "890330077751",
    appId: "1:890330077751:web:82d7a24aac857e6b123db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;