import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import AppBar from '../../components/appbar';
import MediaCard from "./MediaCard";

const ScreenHeight = Dimensions.get('window').height;

const Movies = [
    {
        title: 'Movie 1',
    },
    {
        title: 'Movie 2',
    },
    {
        title: 'Movie 3',
    }
];

const LikedScene = () => (
    <SafeAreaView>
        <AppBar/>
        <View style={styles.main}>
            <MediaCard />
            <MediaCard style={{marginTop: 10}} />
            <MediaCard />
            <MediaCard />
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
