import React from "react";
import {Button, Card, Paragraph} from "react-native-paper";
import {Dimensions, View} from "react-native";
import CardText from "./CardText";
import DislikeBtn from "./DislikeBtn";
import LikeBtn from "./LikeBtn";

const ScreenHeight = Dimensions.get('window').height;

const BrowseCard = ({movie}) => {
    return (
        <View style={styles.main}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Title title="Card Title" subtitle="Card Subtitle" titleStyle={styles.white} subtitleStyle={styles.white} />
                <CardText text={"Type: movie"}/>
                <CardText text={"Starring: actor"}/>
                <CardText text={"Genres: genre"}/>
                <CardText text={"Release: release"}/>
                <CardText text={"Platform: platform"}/>
                <CardText text={"Description: description"}/>
                <Card.Actions>
                    <DislikeBtn movie={movie}/>
                    <LikeBtn movie={movie}/>
                </Card.Actions>
            </Card>
        </View>
    )
};

const styles = {
    main: {
        backgroundColor: '#39485A',
        minHeight: 1.5 * ScreenHeight,
        paddingTop: 0.05 * ScreenHeight,
        paddingBottom: 0.05 * ScreenHeight,
        paddingLeft: 15,
        paddingRight: 15,
    },
    card: {
        minHeight: ScreenHeight * 0.8,
        backgroundColor: '#001B30',
    },
    white: {
        color: 'white',
    },
};

export default BrowseCard;