import React from 'react';
import {SafeAreaView, View} from 'react-native';
import AppBar from "../../components/appbar";
import { HelloWorld } from '@atoms';

const BrowseScene = () => {
    return (
        <SafeAreaView>
            <AppBar />
            <View style={{paddingTop: '6vh'}}/>
            <HelloWorld name="TestBrowse" />
        </SafeAreaView>
    );
};

export default BrowseScene;
