import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import {
  useNavigation,
  useIsFocused,
  useRoute,
  RouteProp,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';
import DeviceListItem from '../../components/DeviceListItem/deviceListItem';
import { RoomListDataInterface } from '../../components/DeviceListItem/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [rooms, setRooms] = useState<RoomListDataInterface[]>([]);


  return (
    <>
      <Button onPress={onDeviceViewPress}>Add New Device</Button>
      <FlatList
        style={styles.container}
        data={rooms}
        renderItem={({ item }) => <DeviceListItem deviceData={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default HomeScreen;
