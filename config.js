//npm install firebase@8.2.3

import firebase from "firebase";
require("@firebase/firestore");

//adicionar as configurações do database


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
