import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { createRoom, setupHighscoreListener, } from '@services';

const CreateRoomScene = ({ navigation }) => {
    const [uid, setUid] = useState();

    useEffect(() => {
        setUid(firebase.auth().currentUser.uid);
    });

    function createRoomAndNavigate(uid) {
        createRoom(uid);
        navigation.navigate('Browse', { roomId: uid });
    }

    // upon creating or joining a room this should navigate to the room scene

    return (
        <View style={styles.main}>
            <Title style={styles.title}>Create Room</Title>
            <div style={{ alignSelf: 'center', minWidth: '50vh', maxWidth: '300vh', marginTop: '15vh' }}>
                <Button onPress={() => {
                    createRoomAndNavigate(uid);
                }} mode="contained" color={'#001B30'} labelStyle={{ color: "#C2BC9C" }}>Generate Room Code</Button>
            </div>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        padding: 10,
        backgroundColor: '#39485A',
        minHeight: '100vh',
        paddingTop: '20vh',
    },
    title: {
        color: '#C2BC9C',
        alignSelf: 'center',
        fontSize: 96,
    }
});

export default CreateRoomScene;
