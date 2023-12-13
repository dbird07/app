import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RemoteControlScreens from './screens/remoteControlScreens/remoteControlScreens';

export default function App() {
  return (
    
    <View style={styles.container}>
     <RemoteControlScreens message='Hello'></RemoteControlScreens>
      <StatusBar style="auto" ></StatusBar>
     
         </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24
  }
});

