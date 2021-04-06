import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';
import React from 'react';

const HomeScene = ({ navigation }) => {
    function createRoomAndNavigate() {
        navigation.navigate('CreateRoom', {});
    }

    function joinRoomAndNavigate() {
        navigation.navigate('JoinRoom', {});
    }

    // upon creating or joining a room this should navigate to the room scene

    return (
        <View style={styles.main}>
            <Title style={styles.title}>Cinee</Title>
            <div style={{ alignSelf: 'center', minWidth: '50vh', maxWidth: '300vh', marginTop: '15vh' }}>
                <Button onPress={() => {
                    createRoomAndNavigate();
                }} mode="contained" color={'#001B30'} labelStyle={{ color: "#C2BC9C" }}>
                    Create Room
                </Button>
                <Button onPress={() => {
                    joinRoomAndNavigate();
                }} mode="contained" color={'#001B30'} style={{ marginTop: '2vh' }} labelStyle={{ color: "#C2BC9C" }}>
                    Join Room
                </Button>
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
    },
    buttons: {
        alignSelf: 'center',
        minWidth: '50vh',
        paddingLeft: '5vh',
        marginRight: '5vh'
    },
});

export default HomeScene;
