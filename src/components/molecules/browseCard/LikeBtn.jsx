import React from 'react';
import {Button} from "react-native-paper";
import {Dimensions} from "react-native";

const ScreenHeight = Dimensions.get('window').height;

const LikeBtn = ({movie}) => {
    function like(movie) {
        console.log("User disliked movie");
    }

    return (
        <Button
            onPress={() => like(movie)}
            mode="contained"
            color="#C2BC9C"
            style={{ marginTop: ScreenHeight * 0.02, marginLeft: 10, width: 125 }}
            labelStyle={{ color: '#001B30' }}
        >
            Like
        </Button>
    );
};

export default LikeBtn;