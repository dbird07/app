import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RemoteControlScreens from './screens/remoteControlScreens/remoteControlScreens';
import LoginScreen from './screens/LoginScreen/Login.screen';
import AuthStack from './navigation/authStack/authStack';

export default function App() {
  return (
    
    <View style={styles.container}>
      <AuthStack></AuthStack>
      <StatusBar style="auto" ></StatusBar>
  
     
    </View>


  );
}

const styles = StyleSheet.create({
  //red background
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24
  }
});

