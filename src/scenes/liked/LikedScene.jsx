import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import {HelloWorld} from '@atoms';
import AppBar from '../../components/appbar';

const ScreenHeight = Dimensions.get('window').height;

const LikedScene = () => (
    <SafeAreaView>
        <AppBar/>
        <View style={styles.main}>
            <HelloWorld name="TestLiked"/>
        </View>
    </SafeAreaView>
);

const styles = {
    main: {
        backgroundColor: '#39485A',
        minHeight: 1.5 * ScreenHeight,
        paddingTop: 0.05 * ScreenHeight,
        paddingBottom: 0.05 * ScreenHeight,
        paddingLeft: 15,
        paddingRight: 15,
    },
};

export default LikedScene;
