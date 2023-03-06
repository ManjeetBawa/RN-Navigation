import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigator = useNavigation();
  const [bttn, setbttn] = useState(false);
  const [head, sethead] = useState(false);

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
      <TouchableOpacity onPress={goButton}>
        <Text style={styles.text}>Go to button</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goHead}>
        <Text style={styles.text}>Go to header</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Welcome;
