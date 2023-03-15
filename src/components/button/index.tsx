import React from 'react';
import {Pressable, Text, View , TouchableOpacity} from 'react-native';
import styles from './style';
// interface ButtonProps {

// }
const Button = ({onpress, title}) => {
  return (
    <View>
      <TouchableOpacity onPress={onpress} style={styles.bttn}>
        <Text style={styles.alltext}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
