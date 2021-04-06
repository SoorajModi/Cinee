import React from 'react';
import Navigator from '@navigations';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import { RoomProvider } from '@services';

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <RoomProvider>
      <Navigator />
    </RoomProvider>
  );
}
