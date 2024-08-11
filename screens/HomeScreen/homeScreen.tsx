// Import necessary modules from React and React Native
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RootTagContext,
  StatusBar,
} from 'react-native';
import DeviceListItem from '../../components/DeviceListItem/deviceListItem';
import { RoomListDataInterface } from '../../components/DeviceListItem/types';
import { InitialRoomData } from './testData';
import { Button } from 'react-native-paper';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component
interface HomeScreenProps {}

// Define the functional component using TypeScript
const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const onListItemPress = (deviceData: RoomListDataInterface) => {};

  const [RoomData, setRoomData] = useState<RoomListDataInterface[]>([]);

  const goToCreateScreen = () => {
    //insert navigation code here to take you to the create screen..
    // and make sure to pass the addNewRoomToIt
  };
  const addNewRoom = (newRoom: RoomListDataInterface) => {};

  const onRandomRoomDataPress = () => {
    const newRoomData = RoomData;
    newRoomData.push({
      id: Math.random().toString(),
      roomName: 'Random Room',
      treatStatus: 'empty',
      countDown: '',
    });

    setRoomData(newRoomData);
    console.log(RoomData);
  };

  const changeStateOfRoom = (id: string, newData: RoomListDataInterface) => {
    const newRoomData = RoomData.map((room) => {
      if (room.id === id) {
        return {
          ...room,
          treatStatus: room.treatStatus === 'empty' ? 'full' : 'empty',
        };
      }
      return room;
    });

    setRoomData(newRoomData);
  };

  return (
    <>
      <Button onPress={onRandomRoomDataPress}> Add Randrom Data </Button>
      <FlatList
        style={styles.container}
        data={RoomData}
        renderItem={({ item }) => <DeviceListItem deviceData={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
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
