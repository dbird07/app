// Import necessary modules from React and React Native
import React from 'react';
import { Button, TextInput, Switch } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { RoomListDataInterface } from '../../components/DeviceListItem/types';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component

// Define the functional component using TypeScript

interface DeviceViewScreenProps {
  roomData: RoomListDataInterface;
  onModifyRoomData: (id: string, newData: RoomListDataInterface) => void;
}

const DeviceViewScreen: React.FC<DeviceViewScreenProps> = () => {
  return (
    <View style={styles.main}>
<<<<<<< HEAD
      <Text style={styles.settings}>Settings</Text>

      <View style={styles.ringsPerHourBox}>
        <TextInput label={'Rings Per Hour'}></TextInput>
      </View>

      <View style={styles.chanceOfDropBox}>
        <TextInput label={'Chance of drop per ring'}></TextInput>
      </View>

      <View style={styles.maxDropsBox}>
        <TextInput label={'Max drops per hour'}></TextInput>
      </View>

      <View style={styles.treatsRemainingBox}>
        <TextInput label={'Treats Remaining'}></TextInput>
      </View>
=======
      <Text style={styles.lifetime}>Lifetime Stats</Text>
      {/* <View style={styles.upperBox}> */}
      <Text style={styles.dispensed}>Treats Dispensed</Text>
      {/* </View> */}
      {/* <View style={styles.middleBox}> */}
      <TextInput label={'Rings Per Hour'}></TextInput>
      {/* </View> */}

      {/* <View style={styles.lowerMiddleBox}> */}
      <TextInput label={'Chance of drop per ring'}></TextInput>
      {/* </View> */}

      {/* <View style={styles.lowerBox}> */}
      <TextInput label={'Max drops per hour'}></TextInput>
      {/* </View> */}
      <View style={styles.switchContainer}>
        <Text style={styles.dispensed}>Enable Auto Dispense</Text>
        <Switch></Switch>
      </View>

      <TextInput
        placeholder="please enter how many treats are in the device"
        mode="outlined"
        label={'treats remaining'}
        style={styles.middle}
      ></TextInput>
>>>>>>> d0c9edf135b01b080a145e6c6832f30da4ee55af

      <Button style={styles.button} mode="contained" onPress={() => {}}>
        {' '}
        dispense now{' '}
      </Button>
    </View>
  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  centerText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Optional: make the text bold
    textAlign: 'center',
  },
  dispensed: {},
  middle: {
    width: 300,
  },

  button: {
    marginBottom: 20,
    marginTop: 20,

    justifyContent: 'center',
<<<<<<< HEAD
    bottom: '3%',
    left: '40%',
  },

  settings: {
    position: 'absolute',
    bottom: '105%',
    left: '42%',
    fontSize: 40,
  },

  ringsPerHourBox: {
    width: '70%',
    padding: 35,
    left: '15%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '7%',
  },
  chanceOfDropBox: {
    width: '70%',
    padding: 35,
    left: '15%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '2%',
  },

  maxDropsBox: {
    width: '70%',
    padding: 35,
    left: '15%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '-3%',
  },

  treatsRemainingBox: {
    width: '70%',
    padding: 35,
    left: '15%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '-8%',
=======
  },

  lifetime: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 40,
  },
  upperBox: {
    width: '80%',
    padding: 50,

    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
  },

  middleBox: {
    padding: 50,

    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
  },
  lowerMiddleBox: {
    width: '80%',
    padding: 50,

    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
  },

  lowerBox: {
    width: '80%',
    padding: 50,

    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
>>>>>>> d0c9edf135b01b080a145e6c6832f30da4ee55af
  },

  switchContainer: {
    justifyContent: 'center',
    padding: 20,
  },
});

// Export the component
export default DeviceViewScreen;
