import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCZknBYWiCZWEBPN0q6UJYWW_7e_xO2lDQ",
    authDomain: "drive-clone-bc9ee.firebaseapp.com",
    projectId: "drive-clone-bc9ee",
    storageBucket: "drive-clone-bc9ee.appspot.com",
    messagingSenderId: "983311455258",
    appId: "1:983311455258:web:04fff982c25f301ab46da3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
