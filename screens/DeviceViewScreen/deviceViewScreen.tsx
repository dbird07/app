// Import necessary modules from React and React Native
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Switch } from 'react-native-paper';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component
type DeviceViewScreenRouteProp = RouteProp<
  RootStackParamList,
  'DeviceViewScreen'
>;
// Define the functional component using TypeScript
const DeviceViewScreen: React.FC<{}> = (props) => {
  // Get the navigation object using the hook
  const route = useRoute<DeviceViewScreenRouteProp>(); // Type the route prop to get the correct type for params
  const deviceData = route.params.deviceData;
  const navigation = useNavigation(); // Get the navigation object using the hook

  return <Text>{deviceData.roomName}</Text>;
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({});

// Export the component
export default DeviceViewScreen;
function useEffect(arg0: () => void, arg1: any[]) {
  throw new Error('Function not implemented.');
}
