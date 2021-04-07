import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { HelloWorld } from '@atoms';
import AppBar from '../../components/appbar';

const ScreenHeight = Dimensions.get('window').height;

const MatchesScene = () => (
  <SafeAreaView>
    <AppBar />
    <View style={{ paddingTop: 0.1 * ScreenHeight }} />
    <HelloWorld name="TestBrowse" />
  </SafeAreaView>
);

export default MatchesScene;
