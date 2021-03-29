/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { LoginForm } from '@organisms'

const LoginScene = ({ navigation }) => {

  function navigateHomeOnLogin(loginResult) {
    if (loginResult == true) {
      navigation.navigate('Home')
    }
  }

  return (
    <SafeAreaView>
      <LoginForm emitLoginResult={navigateHomeOnLogin}></LoginForm>
    </SafeAreaView>
  );
};

export default LoginScene;
