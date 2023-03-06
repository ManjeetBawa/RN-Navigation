import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <View>
      <Text>this is my header</Text>
    </View>
  );
};

export default Header;
