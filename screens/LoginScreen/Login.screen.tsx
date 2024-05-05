// Import necessary modules from React and React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

// Define the props interface for the component
interface LoginScreenProps {
}
 
// Define the functional component using TypeScript
const LoginScreen: React.FC<LoginScreenProps> = (props) => {


  
  return (
    <View style={styles.main}>
      <TextInput
      style={styles.textBox}
      label="Email"
      value={"x"}
      onChangeText={text => {}}
    />
       <TextInput
         style={styles.textBox}
      label="Password"
      value={"x"}
      onChangeText={text => {}}
    />
     <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Login
  </Button>
    </View>

  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main : {
    flex: 1,
  },
  textBox: {
    margin: 10,
  
  }
});

// Export the component
export default LoginScreen;
