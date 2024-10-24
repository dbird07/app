import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DeviceViewScreen from '../../screens/DeviceViewScreen/deviceViewScreen';
import NewDevice from '../../screens/CreateNewDeviceScreen/NewDevice';
import { DeviceProvider } from '../../providers/device-provider/device-provider';
import HomeScreen from '../../screens/HomeScreen/homeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  DeviceViewScreen: { deviceId: string };
  NewDevice: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => {
  return (
    <DeviceProvider>
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
          <Stack.Screen
            name="NewDevice"
            component={NewDevice}
            options={{ title: 'Create New Device' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DeviceProvider>
  );
};

export default MainStack;
