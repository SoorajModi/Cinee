import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { HelloWorld } from '@atoms'
import { storeHighScore, setupHighscoreListener, createRoom, joinRoom } from "@services";

const HomeScene = ({ navigation }) => {

    const [roomId, setRoomId] = useState("");
    const [uid, setUid] = useState()

    useEffect(() => {
        setUid(firebase.auth().currentUser.uid)
    })

    useEffect(() => {
        //this 0 is the UID not a highscore lol. Comment your own code Nathan
        setupHighscoreListener(0)
    })

    function createRoomAndNavigate(uid) {
        createRoom(uid)
        navigation.navigate('Room', { roomId: uid })
    }

    function joinRoomAndNavigate(roomId, uid) {
        joinRoom(roomId, uid)
        navigation.navigate('Room', { roomId: roomId })
    }

    //upon creating or joining a room this should navigate to the room scene

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter The Room Code"
                onChangeText={roomId => setRoomId(roomId)}
                defaultValue={"Enter The Room Code"}>
            </TextInput>
            <Button onPress={() => { createRoomAndNavigate(uid) }}>Create Room</Button>
            <Button onPress={() => { joinRoomAndNavigate(roomId, uid) }}>Join Room</Button>
        </View>
    );
};

export default HomeScene;
