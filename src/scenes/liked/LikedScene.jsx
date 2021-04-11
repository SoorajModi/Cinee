import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { AppBar } from '../../components/molecules';
import MediaCard from "./MediaCard";
import { RoomContext, setupUserMovieListListener } from '@services'
import { MovieList } from '@organisms'

const ScreenHeight = Dimensions.get('window').height;

const LikedScene = () => {
    const [movieList, setMovieList] = useState([])
    const roomId = useContext(RoomContext)

    useEffect(() => {
        setupUserMovieListListener(roomId, setMovieList)
    }, [])

    return (
        < SafeAreaView >
            <AppBar />
            <View style={styles.main}>
                <MovieList movieList={movieList} />
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
