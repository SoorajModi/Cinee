import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const LoginScene = ({ navigation }: any) => (
    <SafeAreaView>
        <Text>Screen: Login</Text>
        <Button title="HomeButton" onPress={() => navigation.navigate('Home')}> </Button>
    </SafeAreaView>
);

export default LoginScene;