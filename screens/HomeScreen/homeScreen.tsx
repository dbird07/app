// Import necessary modules from React and React Native
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RootTagContext,
  StatusBar,
} from 'react-native';
import DeviceListItem from '../../components/DeviceListItem/deviceListItem';
import { RoomListDataInterface } from '../../components/DeviceListItem/types';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component
interface HomeScreenProps {}

const DATA: RoomListDataInterface[] = [
  {
    id: '1',
    roomName: 'Living Room',
    treatStatus: 'empty',
    countDown: '',
  },
  {
    id: '2',
    roomName: 'Bedroom',
    treatStatus: '',
    countDown: '',
  },
];

// Define the functional component using TypeScript
const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const onListItemPress = (deviceData: RoomListDataInterface) => {};

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={({ item }) => <DeviceListItem deviceData={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

// Export the component
export default HomeScreen;
// Define the functional component using TypeScript
