import React from "react";
import { Card } from "react-native-paper";
import { Dimensions } from "react-native";
import CardText from "./CardText";
import DislikeBtn from "./DislikeBtn";
import LikeBtn from "./LikeBtn";

const ScreenHeight = Dimensions.get('window').height;

const BrowseCard = ({ movie, roomId }) => {
    const src = { uri: movie.img }
    return (
        <Card style={styles.card}>
            <Card.Cover source={src} />
            <Card.Title title={movie.title} subtitle={`Rating: ${movie.avgrating}`} titleStyle={styles.white}
                subtitleStyle={styles.white} />
            <CardText text={movie.synopsis.replace("&#39;", "'")} />
            <Card.Actions>
                <DislikeBtn movie={movie} roomId={roomId} />
                <LikeBtn movie={movie} roomId={roomId} />
            </Card.Actions>
        </Card>
    )
};

const styles = {
    card: {
        minHeight: ScreenHeight * 0.8,
        backgroundColor: '#001B30',
        marginTop: 25,
    },
    white: {
        color: 'white',
    },
};

export default BrowseCard;