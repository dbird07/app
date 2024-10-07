import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';
import { useDevices } from '../../providers/device-provider/use-devices.hook';
import { DeviceListDataInterface } from '../../providers/device-provider/types';

type NewDeviceScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewDevice'
>;

const NewDevice: React.FC = () => {
  const navigation = useNavigation<NewDeviceScreenNavigationProp>();
  const { addDevice } = useDevices();

  const [roomName, setRoomName] = useState('');
  const [treatStatus, setTreatStatus] = useState('');
  const [countDown, setCountDown] = useState('');

  const onSubmit = () => {
    const newDevice: DeviceListDataInterface = {
      id: Date.now().toString(),
      roomName,
      treatStatus,
      countDown,
    };

    addDevice(newDevice);
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.main}>
      <Text style={styles.settings}>New Device</Text>

      <View style={styles.inputBox}>
        <TextInput
          label="Room Name"
          value={roomName}
          onChangeText={setRoomName}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          label="Treat Status"
          value={treatStatus}
          onChangeText={setTreatStatus}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          label="Count Down"
          value={countDown}
          onChangeText={setCountDown}
        />
      </View>

      <Button style={styles.button} mode="contained" onPress={onSubmit}>
        Add Device
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#66ccff',
  },
  settings: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});

export default NewDevice;
