import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import { AppBar } from '@molecules';
import { MatchesList } from '@organisms'
import { RoomContext, setupMutualMovieListListener } from '@services'
import { Card } from 'react-native-paper';

const ScreenHeight = Dimensions.get('window').height;

const MatchesScene = () => {
  const [movieList, setMovieList] = useState([]);
  const roomId = useContext(RoomContext);
  const isPopulated = movieList != null && true && movieList.length !== 0;

  useEffect(() => {
    setupMutualMovieListListener(roomId, setMovieList)
  }, []);

  return (
    <SafeAreaView>
      <AppBar />
      <View style={styles.main}>
        {isPopulated ? (
          <MatchesList movieList={movieList} />
        ) : (
          <Card>
            <Card.Title title="No Matches Found!"/>
          </Card>
        )}
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
