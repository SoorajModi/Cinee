import React from 'react';
import { Button } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { removeLikedMovieFromRoom } from '@services';

const ScreenHeight = Dimensions.get('window').height;

const DislikeBtn = ({ movie, roomId }) => {
  function dislike(movie) {
    removeLikedMovieFromRoom(roomId, movie);
  }

  return (
    <Button
      onPress={() => dislike(movie)}
      mode="contained"
      color="#C2BC9C"
      style={{ marginTop: ScreenHeight * 0.02, marginLeft: 10, width: 125 }}
      labelStyle={{ color: '#001B30' }}
    >
      Dislike
    </Button>
  );
};

export default DislikeBtn;
