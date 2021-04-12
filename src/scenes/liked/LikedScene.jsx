import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { AppBar, LikedCard } from '@molecules';
import { LikedList } from '@organisms'
import { Card, Title, Paragraph } from 'react-native-paper';
import { RoomContext, setupUserMovieListListener } from '@services'

const ScreenHeight = Dimensions.get('window').height;

const LikedScene = () => {
    const [movieList, setMovieList] = useState([]);
    const roomId = useContext(RoomContext);
    const isPopulated = movieList != null && true && movieList.length !== 0;

    useEffect(() => {
        setupUserMovieListListener(roomId, setMovieList)  // TODO: UNCOMMENT THIS!!!!!!
    }, []);

    return (
        < SafeAreaView >
            <AppBar />
            <View style={styles.main}>
                {isPopulated ? (
                    <LikedList movieList={movieList} />
                ) : (
                    <Card>
                        <Card.Title title="No Movies Liked"/>
                    </Card>
                )}
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
