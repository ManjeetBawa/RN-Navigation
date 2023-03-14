import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Welcome = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          navigator.navigate('Input');
        }}>
        <Text style={styles.text}>Go to button</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          navigator.navigate('DateTimePick');
        }}>
        <Text style={styles.alltext}>DateTimePicker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          navigator.navigate('ImagePick');
        }}>
        <Text style={styles.alltext}>ImagePicker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bttn}
        onPress={() => {
          navigator.navigate('Async');
        }}>
        <Text style={styles.alltext}>Async example</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Welcome;
