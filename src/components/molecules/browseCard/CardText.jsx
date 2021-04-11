import React from 'react';
import {Paragraph} from "react-native-paper";

const CardText = ({text}) => {
    return (
        <Paragraph style={styles}>{text}</Paragraph>
    )
};

const styles = {
    color: 'white',
    paddingLeft: 15,
};

export default CardText;