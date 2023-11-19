const getAuth = require("firebase/auth");
const initializeApp = require("firebase/app");
const getFirestore = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDYYE09pKJgIzskIqxCdAhDOOdOUoCWJfY",
  authDomain: "demorealtime-d1e78.firebaseapp.com",
  projectId: "demorealtime-d1e78",
  storageBucket: "demorealtime-d1e78.appspot.com",
  messagingSenderId: "164842141378",
  appId: "1:164842141378:web:146bf476288c1d66796d5b",
  measurementId: "G-GE5RHNVS1X",
};

// Initialize Firebase
const app = initializeApp.initializeApp(firebaseConfig);
const db = getFirestore.getFirestore(app);

const auth = getAuth.getAuth();

const email_firebase = "serverless@dev.com";
const password_firebase = "123456";

module.exports = (req, res) => {
  try {
    getAuth
      .signInWithEmailAndPassword(auth, email_firebase, password_firebase)
      .then(async (userCredential) => {
        try {
          await getFirestore.setDoc(
            getFirestore.doc(db, req.body.collection, req.body.document),
            req.body.data
          );
          res.status(200).json({ message: "Success!" });
        } catch (error) {
          res.status(500).json({ error: error });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
