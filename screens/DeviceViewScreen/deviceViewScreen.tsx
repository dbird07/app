import React from 'react';
import { Button, TextInput, Switch } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';
import { useDevices } from '../../providers/device-provider/use-devices.hook';

type DeviceViewScreenRouteProp = RouteProp<
  RootStackParamList,
  'DeviceViewScreen'
>;

const DeviceViewScreen: React.FC = () => {
  const route = useRoute<DeviceViewScreenRouteProp>();
  const { deviceId } = route.params;
  const { getDevice, updateDevice } = useDevices();

  const device = getDevice(deviceId);

  if (!device) {
    return <Text>Device not found</Text>;
  }

  const handleUpdate = (field: string, value: string) => {
    updateDevice(deviceId, { [field]: value });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.lifetime}>Device Details</Text>

      <TextInput
        label="Room Name"
        value={device.roomName}
        onChangeText={(value) => handleUpdate('roomName', value)}
      />

      <TextInput
        label="Treat Status"
        value={device.treatStatus}
        onChangeText={(value) => handleUpdate('treatStatus', value)}
      />

      <TextInput
        label="Count Down"
        value={device.countDown}
        onChangeText={(value) => handleUpdate('countDown', value)}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.dispensed}>Enable Auto Dispense</Text>
        <Switch value={true} onValueChange={() => {}} />
      </View>

      <Button style={styles.button} mode="contained" onPress={() => {}}>
        Dispense now
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  lifetime: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 40,
  },
  dispensed: {},
  switchContainer: {
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
});

export default DeviceViewScreen;
