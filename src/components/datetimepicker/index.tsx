import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';
import Button from '../button';
interface HeaderProps {}

const DateTimePick = ({}: HeaderProps) => {
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log('clicked');
    setShow(false);
    setDate(currentDate);
  };
  const showMode = currentMode => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
        <Text style={styles.text}>selected Date: {date.toLocaleString()}</Text>
      </View>
      <Button onpress={showDatepicker} title="Date Picker" />
      <Button onpress={showTimepicker} title="Time Picker" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimePick;
