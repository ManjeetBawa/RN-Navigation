import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import styles from './style';

interface InputProps {
  placeholder?: string;
  placeholderTextColor: string;
  onchangeText: (param1: string) => void;
  value: string;
}

const Input = ({
  placeholder,
  placeholderTextColor,
  onchangeText,
  value,
}: InputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={styles.inputbox}
        placeholderTextColor={placeholderTextColor}
        onChangeText={val => onchangeText(val)}
        value={value}
      />
    </View>
  );
};

export default Input;
