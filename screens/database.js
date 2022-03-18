import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwjMgo4izJh6aEQXqJSU-gP-xP2yO9kfw",
    authDomain: "manutencao-autonoma.firebaseapp.com",
    projectId: "manutencao-autonoma",
    storageBucket: "manutencao-autonoma.appspot.com",
    messagingSenderId: "461806651799",
    appId: "1:461806651799:web:cd3f894c1fd71130969cd2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;