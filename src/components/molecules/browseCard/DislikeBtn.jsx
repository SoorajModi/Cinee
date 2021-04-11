import React from 'react';
import {Button} from "react-native-paper";
import {Dimensions} from "react-native";

const ScreenHeight = Dimensions.get('window').height;

const DislikeBtn = ({movie}) => {
    function dislike(movie) {
        console.log("User disliked movie");
    }

    return (
        <Button
            onPress={() => dislike(movie)}
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