import firebase from "firebase";

export const storeHighScore = (userId, score) => {
    firebase
        .database()
        .ref('users/' + userId)
        .set({
            highscore: score,
        });
}

export const setupHighscoreListener = (userId) => {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
        const highscore = snapshot.val().highscore;
        console.log("New high score: " + highscore);
    });
}

export const createRoom = (userId) => {
    //set the roomID to this user's ID
    firebase
        .database()
        .ref('rooms/' + userId)
        .set({
            userList: []
        });
    firebase.database().ref('rooms/' + userId + '/userList').push({
        user: userId
    })
}

export const joinRoom = (roomId, userId) => {
    firebase
        .database()
        .ref('rooms/' + roomId + '/userList')
        .push({
            user: userId
        });
}

//if there's no way to easily "remember" the room across scenes, we can store that information per user in the DB and fetch it when needed

//setup roomListener

//leave room function

//some function to destroy the room when there are no users in the room ... tbh best served as a cloud function
