// Import necessary modules from React and React Native
import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

// Define the props interface for the component
interface RemoteControlScreensProps {
  x?: number;
}

// Define the functional component using TypeScript
const RemoteControlScreens: React.FC<RemoteControlScreensProps> = (props) => {
  const [lastThingTouched, setLastThingTouched] = React.useState('Nothing yet');
  const [text, setText] = React.useState('');

  const handleDirectionsPressed = (direction: string) => {
    setLastThingTouched(direction)
  }

  // const handleDirectionLeftPressed = () => {
  //   setLastThingTouched('Left')
  // }
  // const handleDirectionRightPressed = () => {
  //   setLastThingTouched('Right')
  // }
  // const handleDirectionBackPressed = () => {
  //   setLastThingTouched('Back')
  // }
  // const handleDirectionFrontPressed = () => {
  //   setLastThingTouched('Front')
  // }
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} placeholder='Enter a command'></TextInput>
      <Button title='F' onPress={()=>handleDirectionsPressed('F')}></Button>
      <View style={styles.midContainer}>
        <Button  title='L' onPress={()=> handleDirectionsPressed('L')}></Button>
        <Text style={styles.text}>{lastThingTouched}</Text>
        <Button title='R' onPress={()=>handleDirectionsPressed('R')} ></Button>
      </View>
      <Button title='B' onPress={()=>handleDirectionsPressed('B')}></Button>
    </View>

  );
};

// Create a stylesheet for styling the component
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
  },
  midContainer: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export the component
export default RemoteControlScreens;
