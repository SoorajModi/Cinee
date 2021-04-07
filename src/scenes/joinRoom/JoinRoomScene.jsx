import {Dimensions, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {Button, Title} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {joinRoom, setupHighscoreListener,} from '@services';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const JoinRoomScene = ({navigation}) => {
    const [roomId, setRoomId] = useState('');
    const [uid, setUid] = useState();

    useEffect(() => {
        // setUid(firebase.auth().currentUser.uid);
        setUid('');
    });

    useEffect(() => {
        // this 0 is the UID not a highscore lol. Comment your own code Nathan
        setupHighscoreListener(0);
    });

    function joinRoomAndNavigate(roomId, uid) {
        joinRoom(roomId, uid);
        navigation.navigate('Browse', {roomId});
    }

    // upon creating or joining a room this should navigate to the room scene

    return (
        <SafeAreaView style={styles.main}>
            <Title style={styles.title}>Enter Room Code</Title>
            <View style={styles.body}>
                <TextInput
                    style={{
                        height: 40,
                        color: '#ffffff',
                        backgroundColor: '#001B30',
                        width: '100%',
                        alignSelf: 'center'
                    }}
                    placeholder="Enter The Room Code"
                    onChangeText={(roomId) => setRoomId(roomId)}
                />
                <View style={{paddingTop: 0.02 * ScreenHeight}}/>
                <Button onPress={() => {
                    joinRoomAndNavigate(roomId, uid);
                }} mode="contained" color={'#C2BC9C'} labelStyle={{color: "#000000"}}>Join Room</Button>
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
        fontSize: 35,
        paddingTop: 0.2 * ScreenHeight,
    },
    body: {
        alignSelf: 'center',
        marginTop: 0.15 * ScreenHeight
    }
});

export default JoinRoomScene;
