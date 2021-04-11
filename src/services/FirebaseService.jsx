import firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';
require('firebase/functions') // this is necessary for fidning firebase.functions() ... pretty sure that's a glitch on their end

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
const functions = firebase.functions();

// if (location.hostname === 'localhost') {
db.useEmulator('localhost', 9000);
auth.useEmulator('http://localhost:9099/', { disableWarnings: true });
functions.useEmulator('http://localhost:5001/')
// }

export const createRoom = (userId) => {
  // set the roomID to this user's ID
  firebase
    .database()
    .ref(`rooms/${userId}/userLists`)
    .push({
      userList: [userId],
    });
  // initialize the user's movielist, the roomId is the same as the creating user's Id
  initializeUserMovieList(userId, userId);
};

// TODO: only add to list if unique
export async function joinRoom(roomId, userId) {
  const userListRef = db.ref(`rooms/${roomId}/userLists`).orderByKey().limitToLast(1);
  const snapshot = await userListRef.once('value');
  const mostRecentUserListObject = snapshot.val();
  const { userList } = Object.values(mostRecentUserListObject)[0];

  db
    .ref(`rooms/${roomId}/userLists`)
    .push({
      userList: [...userList, userId],
    });
  // initialize the user's movielist
  initializeOnJoinUserMovieList(roomId, userId);
}

function initializeUserMovieList(roomId, userId) {
  const updates = {};
  updates[userId] = [{ title: 'testMovie' }];
  db
    .ref(`rooms/${roomId}/userMovieList`)
    .set(updates);
}

async function initializeOnJoinUserMovieList(roomId, userId) {
  const updates = await getAllUserMovieLists(roomId, userId);
  updates[userId] = [{ title: 'testMovie' }];
  db.ref(`rooms/${roomId}/userMovieList`).set(updates);
}

export async function getMovieListFromFirebase() {
  const ref = await db.ref('MovieListSource').get();
  const data = ref.val().movies;
  return data;
}

export async function getUserMovieList(roomId, userId) {
  const dbLocation = `rooms/${roomId}/userMovieList`;

  const ref = await db.ref(`rooms/${roomId}/userMovieList`).get();
  const value = ref.val();
  var userMovieList = value[userId];
  userMovieList = userMovieList.filter(a => a.title !== "testMovie")
  console.log(userMovieList)
  return userMovieList;
}

async function getAllUserMovieLists(roomId, userId) {
  const dbLocation = `rooms/${roomId}/userMovieList`;

  const ref = await db.ref(`rooms/${roomId}/userMovieList`).get();
  const value = ref.val();
  return value;
}

export async function addLikedMovieToRoom(roomId, toAdd) {
  const userId = getCurrentUid();
  const dbLocation = `rooms/${roomId}/userMovieList`;

  const allUserMovieLists = await getAllUserMovieLists(roomId, userId);
  const userMovieList = await getUserMovieList(roomId, userId);

  const updates = allUserMovieLists;
  updates[userId] = [...userMovieList, toAdd];

  db.ref(dbLocation).set(updates);
}

export async function removeLikedMovieFromRoom(roomId, toRemove) {
  const userId = getCurrentUid();
  const dbLocation = `rooms/${roomId}/userMovieList`;
  var userMovieList = await getUserMovieList(roomId, getCurrentUid());
  var userMovieList = userMovieList.filter((movie) => JSON.stringify(movie) !== JSON.stringify(toRemove));
  const allUserMovieLists = await getAllUserMovieLists(roomId, userId);

  const updates = allUserMovieLists;
  updates[userId] = [...userMovieList];

  db.ref(dbLocation).set(updates);
}

// if there's no way to easily "remember" the room across scenes, we can store that information per user in the DB and fetch it when needed

// setup roomListener
export const setupMutualMovieListListener = (roomId, setMutualMoviesCallback) => {
  db.ref(`rooms/${roomId}/mutualMovieList`).on('value', (snapshot) => {
    console.log(snapshot.val())
    const mutualMovieList = snapshot.val();
    setMutualMoviesCallback(mutualMovieList);
  });
};

export const setupUserMovieListListener = (roomId, setUserMovieListCallBack) => {
  const uid = getCurrentUid()
  db.ref(`rooms/${roomId}/userMovieList/${uid}`).on('value', (snapshot) => {
    var userMovieList = snapshot.val();
    userMovieList = userMovieList.filter(a => a.title !== "testMovie")
    setUserMovieListCallBack(userMovieList);
  });
};


// var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

export const getCurrentUid = () => auth.currentUser.uid;

// Find the intersection of multiple arrays (Used in the cloud function for creating mutual movie list)
// var array1 = ["Lorem", "ipsum", "dolor"],
//     array2 = ["Lorem", "ipsum", "quick", "brown", "foo"],
//     array3 = ["Jumps", "Over", "Lazy", "Lorem"],
//     array4 = [1337, 420, 666, "Lorem"],
//     data = [array1, array2, array3, array4],
//     result = data.reduce((a, b) => a.filter(c => b.includes(c)));

// console.log(result);

// leave room function

// some function to destroy the room when there are no users in the room ... tbh best served as a cloud function
