import React, { useEffect } from 'react';
import { HelloWorld } from '@atoms';
import { SafeAreaView } from 'react-native';

// TODO: Room ID isn't being received correctly atm. Maybe useEffect? route isn't defined
// https://reactnavigation.org/docs/params/
const RoomScene = ({ route, navigation }) => {
  useEffect(() => {
    console.log(route);
  });
  return (
    <SafeAreaView>
      <HelloWorld name="stuff" />
    </SafeAreaView>
  );
};

export default RoomScene;
