import React from 'react';
import Navigator from '@navigations'
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <Navigator />
  );
}
