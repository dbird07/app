import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';
import { useDevices } from './DeviceProvider';

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

  const [ringsPerHour, setRingsPerHour] = useState('');
  const [chanceOfDrop, setChanceOfDrop] = useState('');
  const [maxDrops, setMaxDrops] = useState('');
  const [treatsRemaining, setTreatsRemaining] = useState('');

  const onSubmit = () => {
    const newDevice = {
      id: Date.now().toString(),
      roomName,
      treatStatus,
      countDown,
    };

    addDevice(newDevice);
    navigation.navigate('HomeScreen');
      ringsPerHour: parseInt(ringsPerHour),
      chanceOfDrop: parseFloat(chanceOfDrop),
      maxDrops: parseInt(maxDrops),
      treatsRemaining: parseInt(treatsRemaining),
    };

    navigation.navigate('Home', { newRoom: newDevice });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.settings}>New Device</Text>

      <View style={styles.inputBox}>
        <TextInput
          label="Room Name"
          value={roomName}
          onChangeText={setRoomName}
          label="Rings Per Hour"
          value={ringsPerHour}
          onChangeText={setRingsPerHour}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          label="Treat Status"
          value={treatStatus}
          onChangeText={setTreatStatus}
          label="Chance of drop per ring"
          value={chanceOfDrop}
          onChangeText={setChanceOfDrop}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          label="Count Down"
          value={countDown}
          onChangeText={setCountDown}
        />
      </View>

          label="Max drops per hour"
          value={maxDrops}
          onChangeText={setMaxDrops}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          label="Treats Remaining"
          value={treatsRemaining}
          onChangeText={setTreatsRemaining}
          keyboardType="numeric"
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

// // Import necessary modules from React and React Native
// import React from 'react';
// import { Button, TextInput, Switch } from 'react-native-paper';
// import { View, StyleSheet, Text } from 'react-native';
// //https://callstack.github.io/react-native-paper/docs/components/TextInput/
// // Define the props interface for the component

// // Define the functional component using TypeScript
// const NewDevice: React.FC = () => {
//   return (
//     <View style={styles.main}>
//       <Text style={styles.settings}>New Device</Text>

//       <View style={styles.ringsPerHourBox}>
//         <TextInput label={'Rings Per Hour'}></TextInput>
//       </View>

//       <View style={styles.chanceOfDropBox}>
//         <TextInput label={'Chance of drop per ring'}></TextInput>
//       </View>

//       <View style={styles.maxDropsBox}>
//         <TextInput label={'Max drops per hour'}></TextInput>
//       </View>

//       <View style={styles.treatsRemainingBox}>
//         <TextInput label={'Treats Remaining'}></TextInput>
//       </View>

//       <Button style={styles.button} mode="contained" onPress={() => {}}>
//         {' '}
//         Add Device{' '}
//       </Button>
//     </View>
//   );
// };

// // Create a stylesheet for styling the component
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 50,
//     backgroundColor: '#66ccff', // Optional: background color
//   },
//   centerText: {
//     fontSize: 24, // Adjust the font size as needed
//     fontWeight: 'bold', // Optional: make the text bold
//     textAlign: 'center',
//   },
//   dispensed: {
//     position: 'absolute',
//     top: '50%',
//     left: '42%',
//   },
//   middle: {
//     position: 'absolute',
//     bottom: '30%',
//     left: '19%',
//     width: 300,
//   },

//   button: {
//     position: 'absolute',
//     justifyContent: 'center',
//     bottom: '3%',
//     left: '40%',
//   },

//   settings: {
//     position: 'absolute',
//     bottom: '105%',
//     left: '42%',
//     fontSize: 40,
//   },

//   ringsPerHourBox: {
//     width: '70%',
//     padding: 35,
//     left: '15%',
//     backgroundColor: '#fff', // Optional: box background color
//     borderRadius: 10, // Optional: rounded corners
//     bottom: '7%',
//   },
//   chanceOfDropBox: {
//     width: '70%',
//     padding: 35,
//     left: '15%',
//     backgroundColor: '#fff', // Optional: box background color
//     borderRadius: 10, // Optional: rounded corners
//     bottom: '2%',
//   },

//   maxDropsBox: {
//     width: '70%',
//     padding: 35,
//     left: '15%',
//     backgroundColor: '#fff', // Optional: box background color
//     borderRadius: 10, // Optional: rounded corners
//     bottom: '-3%',
//   },

//   treatsRemainingBox: {
//     width: '70%',
//     padding: 35,
//     left: '15%',
//     backgroundColor: '#fff', // Optional: box background color
//     borderRadius: 10, // Optional: rounded corners
//     bottom: '-8%',
//   },

//   switchContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     padding: 20,
//     top: '65%',
//     right: '19%',
//   },
// });

// // Export the component
// export default NewDevice;
