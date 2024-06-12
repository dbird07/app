// Import necessary modules from React and React Native
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from '../../screens/LoginScreen/Login.screen';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component
interface AuthStackProps {
}
const Stack = createStackNavigator();
// Define the functional component using TypeScript
const AuthStack: React.FC<AuthStackProps> = (props) => {


  
  return (
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="SignIn" component={LoginScreen} options={{ title: 'Sign In' }} />


</Stack.Navigator>




    </NavigationContainer>

  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main : {

  }
});

// Export the component
export default AuthStack;
