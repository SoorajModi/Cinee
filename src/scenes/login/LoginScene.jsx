/* eslint-disable react/prop-types */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Provider as PaperProvider} from "react-native-paper";
import {LoginForm} from '@organisms';
import AppBar from "../../components/appbar";

const LoginScene = ({navigation}) => {
    function navigateHomeOnLogin(loginResult) {
        if (loginResult === true) {
            navigation.navigate('Home');
        }
    }

    return (
        <PaperProvider>
            <SafeAreaView>
                <AppBar/>
                <View style={{display: 'flex', justifyContent: 'center'}}>
                    <LoginForm emitLoginResult={navigateHomeOnLogin}/>
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
};

export default LoginScene;
