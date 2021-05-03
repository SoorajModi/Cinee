import { MatchCard } from '@molecules';
import React from 'react';
import { Dimensions, ScrollView } from 'react-native';

const ScreenHeight = Dimensions.get('window').height;

const MatchesList = ({ movieList }) => (
  <ScrollView style={styles}>
    {
            movieList.map((movie) => (
              <MatchCard key={movie.id} movie={movie} />
            ))
        }
  </ScrollView>
);

const styles = {
  backgroundColor: '#39485A',
  minHeight: 1.5 * ScreenHeight,
  paddingTop: 0.05 * ScreenHeight,
  paddingBottom: 0.05 * ScreenHeight,
  paddingLeft: 15,
  paddingRight: 15,
};

export default MatchesList;
