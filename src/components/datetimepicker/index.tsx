import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './style';
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
      <TouchableOpacity onPress={showDatepicker} style={styles.bttn}>
        <Text style={styles.alltext}>Show date picker</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showTimepicker} style={styles.bttn}>
        <Text style={styles.alltext}>Show time picker</Text>
      </TouchableOpacity>
      
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
