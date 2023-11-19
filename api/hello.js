const getAuth = require("firebase/auth");
const initializeApp = require("firebase/app");
const getFirestore = require("firebase/firestore");


module.exports = (req, res) => {
    res.status(200).json({ message: 'Hello from Vercel!' });
    console.log('moi');
};