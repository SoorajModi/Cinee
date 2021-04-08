import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import AppBar from "../../components/appbar";
import {HelloWorld} from '@atoms';
import {MovieList} from '@organisms';
import {getMovieListFromFirebase, RoomContext} from '@services'
import {Button, Card, Paragraph} from "react-native-paper";

const ScreenHeight = Dimensions.get('window').height;

const BrowseScene = () => {
    const [movieList, setMovieList] = useState([]);
    const roomId = useContext(RoomContext);

    useEffect(() => {
        async function fetchMovieList() {
            const movies = await getMovieListFromFirebase();
            console.log(movies);
            setMovieList(movies);
        }

        console.log(roomId);
        fetchMovieList().then(r => r).catch();
    }, []);

    return (
        <SafeAreaView>
            <AppBar/>
            <View style={styles.main}>
                <Card style={styles.card}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Title title="Card Title" subtitle="Card Subtitle" titleStyle={styles.white} subtitleStyle={styles.white}/>
                    <Paragraph style={styles.cardContents}><HelloWorld name="TestBrowse"/></Paragraph>
                    <Paragraph style={styles.cardContents}>Type: movie</Paragraph>
                    <Paragraph style={styles.cardContents}>Starring: actor</Paragraph>
                    <Paragraph style={styles.cardContents}>Genres: genre</Paragraph>
                    <Paragraph style={styles.cardContents}>Release: release</Paragraph>
                    <Paragraph style={styles.cardContents}>Platforms: Platform</Paragraph>
                    <Paragraph style={styles.cardContents}>Tags: tag</Paragraph>
                    <Paragraph style={styles.cardContents}>Description: description</Paragraph>
                    <MovieList movieList={movieList}/>
                    <Card.Actions>
                        <Button
                            onPress={() => {console.log("User disliked movie")}}
                            mode="contained"
                            color="#C2BC9C"
                            style={{ marginTop: ScreenHeight * 0.02, marginLeft: 10, width: 125 }}
                            labelStyle={{ color: '#001B30' }}
                        >
                            Dislike
                        </Button>
                        <Button
                            onPress={() => {console.log("User like the movie")}}
                            mode="contained"
                            color="#C2BC9C"
                            style={{ marginTop: ScreenHeight * 0.02, marginLeft: 10, width: 125 }}
                            labelStyle={{ color: '#001B30' }}
                        >
                            Like
                        </Button>
                    </Card.Actions>
                </Card>
            </View>
        </SafeAreaView>
    );
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
    cardContents: {
        color: 'white',
        paddingLeft: 15,
    }
};

export default BrowseScene;