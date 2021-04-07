import { StyleSheet, TextInput, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import React, { useEffect, useState, useContext } from 'react';
import firebase from 'firebase';
import { getCurrentUid, useRoomUpdate, joinRoom, RoomUpdateContext } from '@services';

const JoinRoomScene = ({ navigation }) => {
    const [uid, setUid] = useState();
    const [roomId, setRoomId] = useState()
    // const updateRoom = useContext(RoomUpdateContext)
    const updateRoom = useRoomUpdate

    useEffect(() => {
        setUid(getCurrentUid());
    });

    function joinRoomAndNavigate(roomId, uid) {
        updateRoom(roomId)
        joinRoom(roomId, uid);
        navigation.navigate('Browse', { roomId });
    }

    // upon creating or joining a room this should navigate to the room scene

    return (
        <View style={styles.main}>
            <Title style={styles.title}>Enter Room Code</Title>
            <div style={{ alignSelf: 'center', minWidth: '50vh', maxWidth: '300vh', marginTop: '15vh' }}>
                <TextInput
                    style={{ height: 40, color: '#ffffff', backgroundColor: '#001B30', width: '100%', alignSelf: 'center' }}
                    placeholder="Enter The Room Code"
                    onChangeText={(roomId) => setRoomId(roomId)}
                    defaultValue="Enter The Room Code"
                />
                <div style={{ paddingTop: '2vh' }} />
                <Button onPress={() => {
                    joinRoomAndNavigate(roomId, uid);
                }} mode="contained" color={'#C2BC9C'} labelStyle={{ color: "#000000" }}>Join Room</Button>
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
        fontSize: 68,
    }
});

export default JoinRoomScene;
