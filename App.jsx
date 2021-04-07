import React from 'react';
import Navigator from '@navigations';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import { RoomProvider } from '@services';
import FirebaseService from './src/services/FirebaseService'

export default function App() {
  return (
    <RoomProvider>
      <Navigator />
    </RoomProvider>
  );
}
