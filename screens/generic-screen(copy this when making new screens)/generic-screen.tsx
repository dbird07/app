// Import necessary modules from React and React Native
import React from 'react';
import { View, StyleSheet } from 'react-native';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component
interface GenericScreenProps {}

// Define the functional component using TypeScript
const GenericScreen: React.FC<GenericScreenProps> = (props) => {
  return <View style={styles.main}></View>;
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main: {},
});

// Export the component
export default GenericScreen;
