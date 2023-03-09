import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Welcome = () => {
  const navigator = useNavigation();
  const [bttn, setbttn] = useState(false);
  const [head, sethead] = useState(false);
  const [date, setDate] = useState(new Date(1598051730009));
  const [mode, setMode] = useState('date');
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
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const goButton = () => {
    setbttn(value => !value);
  };
  const goHead = () => {
    sethead(value => !value);
  };

  useEffect(() => {
    if (bttn) {
      setbttn(false);
      navigator.navigate('Button');
    } else if (head) {
      sethead(false);
      navigator.navigate('Header');
    }
  }, [bttn, head]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate('Button');
        }}>
        <Text style={styles.text}>Go to button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate('Header');
        }}>
        <Text style={styles.text}>Go to header</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate('ImagePick');
        }}>
        <Text style={styles.text}>ImagePicker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigator.navigate('Async');
        }}>
        <Text style={styles.text}>Async example</Text>
      </TouchableOpacity>
      <Text>selected: {date.toLocaleString()}</Text>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
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
export default Welcome;
