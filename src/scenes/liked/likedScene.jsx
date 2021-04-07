import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import AppBar from "../../components/appbar";
import { HelloWorld } from '@atoms';

const ScreenHeight = Dimensions.get("window").height;

const LikedScene = () => {
    return (
        <SafeAreaView>
            <AppBar />
            <View style={{paddingTop: 0.1 * ScreenHeight}}/>
            <HelloWorld name="TestLiked" />
        </SafeAreaView>
    );
};

export default LikedScene;
