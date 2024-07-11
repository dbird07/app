// Import necessary modules from React and React Native
import React from 'react';
import { Button, TextInput, Switch } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component

// Define the functional component using TypeScript
const DeviceViewScreen: React.FC = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.lifetime}>Lifetime Stats</Text>
      <View style={styles.upperBox}>
        <Text style={styles.dispensed}>Treats Dispensed</Text>
      </View>
      <View style={styles.middleBox}>
        <TextInput label={'Rings Per Hour'}></TextInput>
      </View>

      <View style={styles.lowerMiddleBox}>
        <TextInput label={'Chance of drop per ring'}></TextInput>
      </View>

      <View style={styles.lowerBox}>
        <TextInput label={'Max drops per hour'}></TextInput>
      </View>

      <Switch style={styles.switchContainer}></Switch>
      <TextInput
        placeholder="please enter how many treats are in the device"
        mode="outlined"
        label={'treats remaining'}
        style={styles.middle}
      ></TextInput>

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
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#66ccff', // Optional: background color
  },
  centerText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Optional: make the text bold
    textAlign: 'center',
  },
  dispensed: {
    position: 'absolute',
    top: '50%',
    left: '42%',
  },
  middle: {
    position: 'absolute',
    bottom: '30%',
    left: '19%',
    width: 300,
  },

  button: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: '8%',
    left: '40%',
  },

  lifetime: {
    position: 'absolute',
    bottom: '100%',
    left: '28%',
    fontSize: 40,
  },
  upperBox: {
    width: '80%',
    padding: 50,
    left: '10%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '25%',
  },

  middleBox: {
    width: '80%',
    padding: 50,
    left: '10%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '10%',
  },
  lowerMiddleBox: {
    width: '80%',
    padding: 50,
    left: '10%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '10%',
  },

  lowerBox: {
    width: '80%',
    padding: 50,
    left: '10%',
    backgroundColor: '#fff', // Optional: box background color
    borderRadius: 10, // Optional: rounded corners
    bottom: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    top: '65%',
    right: '19%',
  },
});

// Export the component
export default DeviceViewScreen;
