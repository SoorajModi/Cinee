import React from 'react';
import { SafeAreaView } from 'react-native';
import AppBar from "../../components/appbar";
import { HelloWorld } from '@atoms';

const MatchesScene = () => {
    return (
        <SafeAreaView>
            <AppBar />
            <div style={{paddingTop: '6vh'}}/>
            <HelloWorld name="TestBrowse" />
        </SafeAreaView>
    );
};

export default MatchesScene;
