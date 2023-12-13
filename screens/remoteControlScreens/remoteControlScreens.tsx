// Import necessary modules from React and React Native
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// Define the props interface for the component
interface RemoteControlScreensProps {
  message?: string;
}

// Define the functional component using TypeScript
const RemoteControlScreens: React.FC<RemoteControlScreensProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
      <Button title='F'></Button>
      <Button title='B'></Button>
      <Button title='L'></Button>
      <Button title='R'></Button>
    </View>

  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export the component
export default RemoteControlScreens;
