import React, {useState} from 'react';
import {Card, IconButton} from "react-native-paper";
import PropTypes from 'prop-types';

const MediaCard = ({title}) => {
    const [icon, setIcon] = useState('cards-heart');

    const changeStatus = () => {
        if(icon === 'cards-heart') {
            // unlike previously liked media
            setIcon('heart-outline');
        } else {
            // like media
            setIcon('cards-heart');
        }
    };

  return (
      <Card>
          <Card.Title title={title} right={(props) => <IconButton {...props} icon={icon} onPress={() => changeStatus()} />} />
      </Card>
  )
};

MediaCard.defaultProps = {
    title: 'Default Title',
};

MediaCard.propTypes = {
    title: PropTypes.string,
};

export default MediaCard;