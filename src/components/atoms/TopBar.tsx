import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const TopBar = () => (
    <Appbar style={styles.top}>
        <Appbar.Action
            icon="archive"
            onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action
            icon="delete"
            onPress={() => console.log('Pressed delete')}
        />
    </Appbar>
);

export default TopBar

const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
    },
});