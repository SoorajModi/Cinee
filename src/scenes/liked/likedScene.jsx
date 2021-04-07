import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { HelloWorld } from '@atoms';
import AppBar from '../../components/appbar';

const ScreenHeight = Dimensions.get('window').height;

const LikedScene = () => (
  <SafeAreaView>
    <AppBar />
    <View style={{ paddingTop: 0.1 * ScreenHeight }} />
    <HelloWorld name="TestLiked" />
  </SafeAreaView>
);

export default LikedScene;
