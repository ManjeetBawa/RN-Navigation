import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../input';
const Async = () => {
  const [name, setName] = useState('');
  const SaveName = async () => {
    await AsyncStorage.setItem('name', name);
  };
  const ShowName = async () => {
    const temp = await AsyncStorage.getItem('name');
    if (temp) {
      setName(temp);
    }
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your Name..."
        placeholderTextColor={'black'}
        onchangeText={value => setName(value)}
        value={name}
      />
      <TouchableOpacity onPress={SaveName} style={styles.bttn}>
        <Text style={styles.alltext}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ShowName} style={styles.bttn}>
        <Text style={styles.alltext}>Show</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Async;
