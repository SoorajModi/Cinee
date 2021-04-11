import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { AppBar } from '@molecules';
import { MovieList } from '@organisms'
import { RoomContext, setupMutualMovieListListener } from '@services'

const ScreenHeight = Dimensions.get('window').height;

const MatchesScene = () => {
  const [movieList, setMovieList] = useState([])
  const roomId = useContext(RoomContext)

  useEffect(() => {
    setupMutualMovieListListener(roomId, setMovieList)
  }, []);

  return (
    <SafeAreaView>
      <AppBar />
      <View style={styles.main}>
        <MovieList movieList={movieList}/>
      </View>
    </SafeAreaView>
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

export default MatchesScene;
