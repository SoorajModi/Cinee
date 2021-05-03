import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppBar } from '@molecules';
import { BrowseList } from '@organisms';

const BrowseScene = () => (
  <SafeAreaView>
    <AppBar />
    <BrowseList />
  </SafeAreaView>
);

export default BrowseScene;
