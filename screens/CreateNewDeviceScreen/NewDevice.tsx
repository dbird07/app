import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/mainStack/mainStack';

type NewDeviceScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewDevice'
>;

const NewDevice: React.FC = () => {
  const navigation = useNavigation<NewDeviceScreenNavigationProp>();

  const [ringsPerHour, setRingsPerHour] = useState('');
  const [chanceOfDrop, setChanceOfDrop] = useState('');
  const [maxDrops, setMaxDrops] = useState('');
  const [treatsRemaining, setTreatsRemaining] = useState('');

  const onSubmit = () => {
    const newDevice = {
      id: Date.now().toString(),
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
          label="Rings Per Hour"
          value={ringsPerHour}
          onChangeText={setRingsPerHour}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          label="Chance of drop per ring"
          value={chanceOfDrop}
          onChangeText={setChanceOfDrop}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
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
