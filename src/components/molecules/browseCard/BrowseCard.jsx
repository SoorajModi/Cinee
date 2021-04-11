import React from "react";
import {Card} from "react-native-paper";
import {Dimensions} from "react-native";
import CardText from "./CardText";
import DislikeBtn from "./DislikeBtn";
import LikeBtn from "./LikeBtn";

const ScreenHeight = Dimensions.get('window').height;

const BrowseCard = ({movie, roomId}) => {
    return (
        <Card style={styles.card}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
            <Card.Title title="Card Title" subtitle="Card Subtitle" titleStyle={styles.white}
                        subtitleStyle={styles.white}/>
            <CardText text={"Type: movie"}/>
            <CardText text={"Starring: actor"}/>
            <CardText text={"Genres: genre"}/>
            <CardText text={"Release: release"}/>
            <CardText text={"Platform: platform"}/>
            <CardText text={"Description: description"}/>
            <Card.Actions>
                <DislikeBtn movie={movie} roomId={roomId}/>
                <LikeBtn movie={movie} roomId={roomId}/>
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