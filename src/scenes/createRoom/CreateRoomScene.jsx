import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Title} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {createRoom, setupHighscoreListener,} from '@services';
import firebase from 'firebase';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const CreateRoomScene = ({navigation}) => {
    const [uid, setUid] = useState();

    useEffect(() => {
        // setUid(firebase.auth().currentUser.uid);
    });

    useEffect(() => {
        // this 0 is the UID not a highscore lol. Comment your own code Nathan
        setupHighscoreListener(0);
    });

    function createRoomAndNavigate(uid) {
        createRoom(uid);
        navigation.navigate('Browse', { roomId: uid });
    }

    // upon creating or joining a room this should navigate to the room scene

    return (
        <SafeAreaView style={styles.main}>
            <Title style={styles.title}>Create Room</Title>
            <View style={styles.body}>
                <Button onPress={() => {
                    createRoomAndNavigate(uid);
                }} mode="contained" color={'#001B30'} labelStyle={{color: "#C2BC9C"}}>Generate Room Code</Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#39485A',
        minHeight: 1.5 * ScreenHeight,
        minWidth: ScreenWidth,
    },
    title: {
        color: '#C2BC9C',
        alignSelf: 'center',
        fontSize: 51,
        paddingTop: 0.2 * ScreenHeight,
    },
    body: {
        alignSelf: 'center',
        paddingTop: 0.15 * ScreenHeight,
        fontSize: 96,
    }
});

export default CreateRoomScene;
