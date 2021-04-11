import React, { useState, useEffect, useContext } from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';
import { RoomContext, addLikedMovieToRoom, removeLikedMovieFromRoom } from '@services';

const MovieCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);
  const roomId = useContext(RoomContext);

  function setMovieLiked(movie) {
    addLikedMovieToRoom(roomId, movie);
  }

  function unlikeMovie(movie) {
    removeLikedMovieFromRoom(roomId, movie);
  }

  function toggleMovieLiked(movie) {
    console.log(`movie ID: ${movie.id} Liked: ${isLiked}`);
    isLiked ? unlikeMovie(movie) : setMovieLiked(movie);
    isLiked ? setIsLiked(false) : setIsLiked(true);
  }

  return (
    <Card>
      <Card.Title title={movie.title} subtitle={movie.avgrating} />
      <Card.Content>
        {/* <Title>Card title</Title> */}
        <Paragraph>{movie.synopsis}</Paragraph>
      </Card.Content>
      <Card.Cover source={movie.img} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button onPress={() => toggleMovieLiked(movie)}>Ok</Button>
      </Card.Actions>
    </Card>
  );
};

export default MovieCard;
