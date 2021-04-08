import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBar = () => (
  <Appbar style={styles.top}>
    <Appbar.Content title="Cinee" color="#C2BC9C" style={styles.title} />
  </Appbar>
);

export default AppBar;

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#001B30',
    position: 'relative',
    left: 0,
    right: 0,
  },
  title: {
    alignItems: 'center',
  },
});
