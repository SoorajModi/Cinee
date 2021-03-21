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
