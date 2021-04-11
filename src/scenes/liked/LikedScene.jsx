import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { AppBar } from '../../components/molecules';
import MediaCard from "./MediaCard";
import { RoomContext, setupUserMovieListListener } from '@services'
import { MovieList } from '@organisms'
import { Card, Title, Paragraph } from 'react-native-paper';

const ScreenHeight = Dimensions.get('window').height;

const LikedScene = () => {
    const [movieList, setMovieList] = useState([])
    const roomId = useContext(RoomContext)
    const isPopulated = movieList != null && movieList != undefined && movieList.length != 0

    useEffect(() => {
        setupUserMovieListListener(roomId, setMovieList)
    }, []);

    return (
        < SafeAreaView >
            <AppBar />
            <View style={styles.main}>
                {isPopulated ? (
                    <MovieList movieList={movieList} />
                ) : (
                    <Card>
                        <Card.Title title="No Movies Liked"></Card.Title>
                    </Card>
                )}
                {/* {
                    movieList.map((movie) => (
                        <MediaCard style={{ marginTop: 10 }} />
                    ))
                } */}
            </View>
        </  SafeAreaView>

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
};

export default LikedScene;
