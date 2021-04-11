const firebase = require('firebase');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const firebaseConfig = {
  apiKey: "AIzaSyDeRq9_0I2lglEUECwanDOefD6b0ktzcdw",
  authDomain: "cinee-a236a.firebaseapp.com",
  databaseURL: 'https://cinee-a236a-default-rtdb.firebaseio.com/',
  projectId: "cinee-a236a",
  storageBucket: "cinee-a236a.appspot.com",
  messagingSenderId: "547099562315",
  appId: "1:547099562315:web:5b17cabae3e3c03ed958ce",
  measurementId: "G-KK5E88PDD6"
}

firebase.initializeApp(firebaseConfig);
const db = firebase.database()

exports.updateMutualMovieList = functions.database.ref('rooms/{roomId}/userMovieList')
  .onWrite((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const userMovieLists = snapshot.after.val();
    const lists = Object.values(userMovieLists)
    functions.logger.log('lists', lists)
    var mutualMovieList = lists.reduce((a, b) => a.filter(c => b.some(movie => movie.title === c.title)));
    //because firebase requires that each node have some data, testMovie populates every list
    mutualMovieList = mutualMovieList.filter(a => a.title !== "testMovie")
    functions.logger.log('mutual', mutualMovieList)
    return db.ref(`rooms/${context.params.roomId}/mutualMovieList`).set(mutualMovieList);
  });