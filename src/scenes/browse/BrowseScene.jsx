import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';
import AppBar from "../../components/appbar";
import { HelloWorld } from '@atoms';
import { MovieList } from '@organisms';
import { RoomContext, getMovieListFromFirebase, addLikedMovieToRoom, removeLikedMovieFromRoom } from '@services'

const BrowseScene = ({ navigation }) => {
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

    function setMovieLiked(movie) {
        addLikedMovieToRoom(roomId, movie)
    }

    function unlikeMovie(movie) {
        removeLikedMovieFromRoom(roomId, movie)
    }

    return (
        <SafeAreaView>
            <AppBar />
            {/* <div style={{ paddingTop: '6vh' }} /> */}
            <HelloWorld name="TestBrowse" />
            <MovieList movieList={movieList}></MovieList>
        </SafeAreaView >
    );
};

export default BrowseScene;
