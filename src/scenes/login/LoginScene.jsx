/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import { LoginForm } from '@organisms';
import AppBar from "../../components/appbar";

const LoginScene = ({ navigation }) => {

    function navigateHomeOnLogin(loginResult) {
        if (loginResult === true) {
            navigation.navigate('Home');
        }
    }

    return (
        <PaperProvider>
            <SafeAreaView>
                <AppBar />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LoginForm emitLoginResult={navigateHomeOnLogin} />
                </div>
            </SafeAreaView>
        </PaperProvider>
    );
};

export default LoginScene;
