import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { HelloWorld } from '@atoms';
import { MovieList } from '@organisms';
import {
  addLikedMovieToRoom, getMovieListFromFirebase, removeLikedMovieFromRoom, RoomContext,
} from '@services';
import AppBar from '../../components/appbar';

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
    fetchMovieList();
  }, []);

  function setMovieLiked(movie) {
    addLikedMovieToRoom(roomId, movie);
  }

  function unlikeMovie(movie) {
    removeLikedMovieFromRoom(roomId, movie);
  }

  return (
    <SafeAreaView>
      <AppBar />
      <View style={{ paddingTop: 0.1 * ScreenHeight }} />
      <HelloWorld name="TestBrowse" />
      <MovieList movieList={movieList} />
    </SafeAreaView>
  );
};

export default BrowseScene;
