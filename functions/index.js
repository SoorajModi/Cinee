const firebase = require('firebase');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const firebaseConf = require('../firebaseConfig');
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

// The Firebase Admin SDK to access Firestore.

firebase.initializeApp(firebaseConfig);
const db = firebase.database()

exports.updateMutualMovieList = functions.database.ref('rooms/{roomId}/userMovieList')
  // rooms/${roomId}/userMovieList

  .onWrite((snapshot, context) => {
    // Grab the current value of what was written to the Realtime Database.
    const userMovieLists = snapshot.after.val();
    const lists = Object.values(userMovieLists)
    functions.logger.log('lists', lists)
    var mutualMovieList = lists.reduce((a, b) => a.filter(c => b.some(movie => movie.title === c.title)));
    //because firebase requires that each node have some data, testMovie populates every list
    mutualMovieList = mutualMovieList.filter(a => a.title !== "testMovie")
    functions.logger.log('mutual', mutualMovieList)
    // functions.logger.log('movieList testing', context.params, userMovieLists)
    // for (const [key, value] of Object.entries(userMovieLists)) {
    //   functions.logger.log('testing', );
    // }
    // userMovieListArrays = [[]]
    // You must return a Promise when performing asynchronous tasks inside a Functions such as
    // writing to the Firebase Realtime Database.
    // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
    return db.ref(`rooms/${context.params.roomId}/mutualMovieList`).set(mutualMovieList);
  });

// Find the intersection of multiple arrays (Used in the cloud function for creating mutual movie list)
// var array1 = ["Lorem", "ipsum", "dolor"],
//     array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
//     array3 = ["Jumps", "Over", "Lazy", "Lorem"],
//     array4 = [1337, 420, 666, "Lorem"],
//     data = [array1, array2, array3, array4],
//     result = data.reduce((a, b) => a.filter(c => b.includes(c)));
