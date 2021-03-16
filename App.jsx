import React from 'react';
import Navigator from '@navigations'
import { StyleSheet, View } from "react-native";
import { Provider as Paper } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context"
import { TopBar } from "@atoms";
import { Theme } from "@styles";

export default function App() {
  return (
    <Paper theme={Theme}>
      <SafeAreaProvider>
        <View >
          <TopBar ></TopBar>

        </View>
        <Navigator />
      </SafeAreaProvider>
    </Paper>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

