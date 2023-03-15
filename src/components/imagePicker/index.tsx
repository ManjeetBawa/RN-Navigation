import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../button';
import styles from './style';
const ImagePick = () => {
  const [show, setShow] = useState(
    'https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png',
  );
  const selectimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setShow(image.path);
    });
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: show}} style={styles.image} />
      <Button onpress={selectimage} title="Selece Profile Picture" />
    </View>
  );
};

export default ImagePick;
