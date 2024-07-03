// Import necessary modules from React and React Native
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component

// Define the functional component using TypeScript
const deviceViewScreen: React.FC = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.centerText}>Lifetime Stats</Text>
      <Text style={styles.leftThird}>Treats Dispensed</Text>
    </View>
  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66ccff', // Optional: background color
  },
  centerText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold', // Optional: make the text bold
    textAlign: 'center',
  },
  leftThird: {
    position: 'absolute',
    top: '50%',
    left: '10%',
  },
  rightThird: {
    position: 'absolute',
    top: '50%',
    right: '10%',
  },
});

// Export the component
export default deviceViewScreen;
