import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../button';

const Welcome = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        onpress={() => {
          navigator.navigate('DateTimePick');
        }}
        title="DateTimePick"
      />
      <Button
        onpress={() => {
          navigator.navigate('ImagePick');
        }}
        title="ImageCropPicker"
      />
      <Button
        onpress={() => {
          navigator.navigate('Async');
        }}
        title="AsyncStorage"
      />
    </View>
  );
};
export default Welcome;
