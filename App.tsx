import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen/Login.screen';
import AuthStack from './navigation/authStack/authStack';
import React from 'react';
import MainStack from './navigation/mainStack/mainStack';

export default function App() {
  return (
    <View style={styles.container}>
      {false ? <AuthStack></AuthStack> : <MainStack></MainStack>}
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  //red background
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
