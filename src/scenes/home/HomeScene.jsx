import {SafeAreaView, StyleSheet, View, Dimensions, Alert} from 'react-native';
import {Button, Title} from 'react-native-paper';
import React from 'react';

const ScreenHeight = Dimensions.get("window").height;
const ScreenWidth = Dimensions.get("window").width;

const HomeScene = ({navigation}) => {
    function createRoomAndNavigate() {
        navigation.navigate('CreateRoom');
    }

    function joinRoomAndNavigate() {
        console.log("Clicked join room");
        navigation.navigate('JoinRoom');
    }

    // upon creating or joining a room this should navigate to the room scene

    return (
        <>
        <SafeAreaView style={styles.main}>
            <View>
                <Title style={styles.title}>Cinee</Title>
            </View>
            <View style={styles.body}>
                <Button onPress={() => {
                    createRoomAndNavigate();
                }} mode="contained" color={'#001B30'} labelStyle={{color: "#C2BC9C"}}>
                    Create Room
                </Button>
                <Button onPress={() => {
                    joinRoomAndNavigate();
                }} mode="contained" color={'#001B30'} style={{marginTop: ScreenHeight*0.02}} labelStyle={{color: "#C2BC9C"}}>
                    Join Room
                </Button>
            </View>
         </SafeAreaView>
         </>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#39485A',
        minHeight: 1.5 * ScreenHeight,
        minWidth: ScreenWidth,
    },
    title: {
        paddingTop: ScreenHeight*0.2,
        color: '#C2BC9C',
        alignSelf: 'center',
        fontSize: 50,
    },
    body: {
        alignSelf: 'center',
        minWidth: ScreenWidth*0.5,
        maxWidth: ScreenWidth*0.75,
        marginTop: ScreenHeight*0.15,
    },
    buttons: {
        alignSelf: 'center',
        minWidth: 50,
        paddingLeft: 5*ScreenWidth,
        // marginRight: 5*ScreenWidth
    },
});

export default HomeScene;
