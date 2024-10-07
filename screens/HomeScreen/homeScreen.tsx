import React from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';
import DeviceListItem from '../../components/DeviceListItem/deviceListItem';
import { useDevices } from '../../providers/device-provider/use-devices.hook';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { devices } = useDevices();

  const onAddNewDevicePress = () => {
    navigation.navigate('NewDevice');
  };

  return (
    <>
      <Button onPress={onAddNewDevicePress}>Add New Device</Button>
      <FlatList
        style={styles.container}
        data={devices}
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
