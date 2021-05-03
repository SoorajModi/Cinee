import React from 'react';
import { Button } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { RoomContext, addLikedMovieToRoom, removeLikedMovieFromRoom } from '@services';

const ScreenHeight = Dimensions.get('window').height;

const ToggleLikeButton = ({ movie, roomId, isLiked }) => {
  const liked = isLiked;

  function setMovieLiked(movie) {
    addLikedMovieToRoom(roomId, movie);
  }

  function unlikeMovie(movie) {
    removeLikedMovieFromRoom(roomId, movie);
  }

  function toggleMovieLiked(movie) {
    console.log(`movie ID: ${movie.id} Liked: ${liked}`);
    liked ? unlikeMovie(movie) : setMovieLiked(movie);
    liked ? setIsLiked(false) : setIsLiked(true);
  }

  return (
    <Button
      onPress={() => toggleMovieLiked(movie, roomId)}
      mode="contained"
      color="#C2BC9C"
      style={{ marginTop: ScreenHeight * 0.02, marginLeft: 10, width: 125 }}
      labelStyle={{ color: '#001B30' }}
    >
      Like
    </Button>
  );
};

export default ToggleLikeButton;
