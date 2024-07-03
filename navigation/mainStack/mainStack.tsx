// Import necessary modules from React and React Native
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from '../../screens/LoginScreen/Login.screen';
import HomeScreen from '../../screens/HomeScreen/homeScreen';
import DeviceViewScreen from '../../screens/DeviceViewScreen/deviceViewScreen';
import { RoomListDataInterface } from '../../components/DeviceListItem/types';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component
interface mainStackProps {}

export type RootStackParamList = {
  HomeScreen: undefined; // No parameters expected for the Home screen
  DeviceViewScreen: { deviceData: RoomListDataInterface }; // Expecting deviceData for DeviceViewScreen
};

const Stack = createStackNavigator<RootStackParamList>();
// Define the functional component using TypeScript
const MainStack: React.FC<mainStackProps> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="DeviceViewScreen"
          component={DeviceViewScreen}
          options={{ title: 'Device Details' }}
        />
      </Stack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="ForgotPassword"
          component={LoginScreen}
          options={{ title: 'Sign In' }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main: {},
});

// Export the component
export default MainStack;
