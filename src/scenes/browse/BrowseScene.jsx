import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import AppBar from "../../components/appbar";
import { HelloWorld } from '@atoms';
import { MovieList } from '@organisms';
import { RoomContext, getMovieListFromFirebase } from '@services'

const BrowseScene = () => {
    const [movieList, setMovieList] = useState([])
    const roomId = useContext(RoomContext)

    useEffect(() => {
        async function fetchMovieList() {
            const movies = await getMovieListFromFirebase()
            console.log(movies)
            setMovieList(movies)
        }
        console.log(roomId)
        fetchMovieList()
    }, [])

    const ScreenHeight = Dimensions.get("window").height;

    return (
        <SafeAreaView>
            <AppBar />
            <View style={{ paddingTop: 0.1 * ScreenHeight }} />
            <HelloWorld name="TestBrowse" />
            <MovieList movieList={movieList}></MovieList>
        </SafeAreaView >
    );
};

export default BrowseScene;