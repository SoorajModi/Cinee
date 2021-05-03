import React, { useState } from 'react';
import { Card, IconButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import { moveEmitHelpers } from 'typescript';

const LikedCard = ({ movie }) => {
  const [icon, setIcon] = useState('cards-heart');

  const changeStatus = () => {
    if (icon === 'cards-heart') {
      // unlike previously liked media
      setIcon('heart-outline');
    } else {
      // like media
      setIcon('cards-heart');
    }
  };

  return (
    <Card>
      <Card.Title title={movie.title} right={(props) => <IconButton {...props} icon={icon} onPress={() => changeStatus()} />} />
    </Card>
  );
};

LikedCard.defaultProps = {
  movie: {
    title: 'Default',
  },
};

LikedCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default LikedCard;
