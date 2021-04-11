import React from 'react';
import {Button} from "react-native-paper";
import {Dimensions} from "react-native";

const ScreenHeight = Dimensions.get('window').height;

const DislikeBtn = ({movie, roomId}) => {
    function dislike(movie, roomId) {
        console.log("User disliked " + movie + " in room " + roomId);
    }

    return (
        <Button
            onPress={() => dislike(movie, roomId)}
            mode="contained"
            color="#C2BC9C"
            style={{marginTop: ScreenHeight * 0.02, marginLeft: 10, width: 125}}
            labelStyle={{color: '#001B30'}}
        >
            Dislike
        </Button>
    );
};

export default DislikeBtn;