/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { LoginForm } from '@organisms'

const LoginScene = ({ navigation }) => {

  return (
    <SafeAreaView>
      <LoginForm></LoginForm>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScene;
