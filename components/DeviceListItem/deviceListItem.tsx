// Import necessary modules from React and React Native
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RoomListDataInterface } from './types';
import { Swipeable } from 'react-native-gesture-handler';
//https://callstack.github.io/react-native-paper/docs/components/TextInput/
// Define the props interface for the component

// Define the functional component using TypeScript
const DeviceListItem: React.FC<{ deviceData: RoomListDataInterface }> = (
  props,
) => {
  const { deviceData } = props;

  return (
    <Swipeable
      renderRightActions={() => <Text style={styles.text}>Delete</Text>}
    >
      <View style={styles.main}>
        <Text style={styles.text}>{deviceData.roomName} </Text>
        {deviceData.treatStatus == 'empty' ? (
          <Text>Out of Treats</Text>
        ) : (
          <Text>Good</Text>
        )}
      </View>
    </Swipeable>
  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 18,
  },
});

// Export the component
export default DeviceListItem;
