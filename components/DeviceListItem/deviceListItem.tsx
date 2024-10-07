// Import necessary modules from React and React Native
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RoomListDataInterface } from './types';
import { Swipeable } from 'react-native-gesture-handler';
import { Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component

// Define the functional component using TypeScript
const DeviceListItem: React.FC<{
  deviceData: RoomListDataInterface;
}> = (props) => {
  const { deviceData } = props;
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'HomeScreen'>>(); // Get the navigation object using the hook

  const onDeviceViewPress = () => {
    navigation.navigate('DeviceViewScreen', { deviceId: deviceData.id });
  };

  return (
    <TouchableOpacity style={styles.main} onPress={onDeviceViewPress}>
      <View style={styles.leftBox}>
        <Text style={styles.text}>{deviceData.roomName} </Text>
      </View>

      <View style={styles.rightBox}>
        <Switch value={true} onValueChange={() => {}} />
      </View>
    </TouchableOpacity>
  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  leftBox: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'lightgrey',
    flex: 1,
  },
  rightBox: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'red',
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
});

// Export the component
export default DeviceListItem;
