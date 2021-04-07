import firebase from 'firebase';

export const storeHighScore = (userId, score) => {
  firebase
    .database()
    .ref(`users/${userId}`)
    .set({
      highscore: score,
    });
};

export const setupHighscoreListener = (userId) => {
  firebase.database().ref(`users/${userId}`).on('value', (snapshot) => {
    const { highscore } = snapshot.val();
    console.log(`New high score: ${highscore}`);
  });
};

export const createRoom = (userId) => {
  // set the roomID to this user's ID
  console.log(userId)
  firebase
    .database()
    .ref(`rooms/${userId}/userLists`)
    .push({
      userList: [userId],
    });
};

export async function joinRoom(roomId, userId) {
  const userListRef = firebase.database().ref(`rooms/${roomId}/userLists`).orderByKey().limitToLast(1)
  const snapshot = await userListRef.once('value')
  const mostRecentUserListObject = snapshot.val()
  const userList = Object.values(mostRecentUserListObject)[0]["userList"]

  firebase.database()
    .ref(`rooms/${roomId}/userLists`)
    .push({
      userList: [...userList, userId],
    });

}

// if there's no way to easily "remember" the room across scenes, we can store that information per user in the DB and fetch it when needed

// setup roomListener

// leave room function

// some function to destroy the room when there are no users in the room ... tbh best served as a cloud function
