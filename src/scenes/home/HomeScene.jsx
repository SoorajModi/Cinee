import { Text, TextInput, View } from 'react-native';
import { HelloWorld } from '@atoms'
import React, { useState, useEffect } from 'react';
import { storeHighScore, setupHighscoreListener } from "@services";
import firebase from 'firebase';

const HomeScene = () => {

    const [name, setName] = useState("");
    useEffect(() => {
        //this 0 is the UID not a highscore lol. Comment your own code Nathan
        setupHighscoreListener(0)
        console.log(firebase.auth().currentUser)
    })

    return (
        <View style={{ padding: 10 }}>
            <HelloWorld name={name}></HelloWorld>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate!"
                onChangeText={text => setName(text)}
                defaultValue={"enter name"}>
            </TextInput>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate!"
                onChangeText={score => storeHighScore(0, score)}
                defaultValue={"Enter your Score"}>
            </TextInput>
        </View>
    );
};

export default HomeScene;
