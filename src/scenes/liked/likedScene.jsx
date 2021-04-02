import React from 'react';
import { SafeAreaView } from 'react-native';
import AppBar from "../../components/appbar";
import { HelloWorld } from '@atoms';

const LikedScene = () => {
    return (
        <SafeAreaView>
            <AppBar />
            <div style={{paddingTop: '6vh'}}/>
            <HelloWorld name="TestLiked" />
        </SafeAreaView>
    );
};

export default LikedScene;
