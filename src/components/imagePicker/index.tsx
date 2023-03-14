import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';
const ImagePick = () => {
  const [show, setShow] = useState('https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png');
  const selectimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      // cropping: true,
    }).then(image => {
      setShow(image.path);
    });
  };
  return (
    <View>
      <TouchableOpacity onPress={selectimage}>
        <Text>Select profile picture</Text>
      </TouchableOpacity>
      <Image source={{uri: show}} style={styles.image}/>
    </View>
  );
};

export default ImagePick;
