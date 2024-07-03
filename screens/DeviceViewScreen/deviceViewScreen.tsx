// Import necessary modules from React and React Native
import React from 'react';
<<<<<<< HEAD
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component

// Define the functional component using TypeScript
const deviceViewScreen: React.FC = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.centerText}>Lifetime Stats</Text>
      <Text style={styles.leftThird}>Treats Dispensed</Text>
    </View>
  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66ccff', // Optional: background color
  },
  centerText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Optional: make the text bold
    textAlign: 'center',
  },
  leftThird: {
    position: 'absolute',
    top: '50%',
    left: '10%',
  },
  rightThird: {
    position: 'absolute',
    top: '50%',
    right: '10%',
  },
});

// Export the component
export default deviceViewScreen;
=======
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
>>>>>>> bdd96e470934e2a676f87e72326672905d4a5617
