const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.updateMutualMovieList = functions.database.ref('rooms/{roomId}/userMovieList')
    //rooms/${roomId}/userMovieList

    .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.val();
        firebase.logger.log('movieList testing', context.params.documentId, original)
        // You must return a Promise when performing asynchronous tasks inside a Functions such as
        // writing to the Firebase Realtime Database.
        // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
        return snapshot.ref.parent.child('uppercase').set(uppercase);
    });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



// Find the intersection of multiple arrays (Used in the cloud function for creating mutual movie list)
// var array1 = ["Lorem", "ipsum", "dolor"],
//     array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
//     array3 = ["Jumps", "Over", "Lazy", "Lorem"],
//     array4 = [1337, 420, 666, "Lorem"],
//     data = [array1, array2, array3, array4],
//     result = data.reduce((a, b) => a.filter(c => b.includes(c)));