import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './components/header';
import Button from './components/button';
import Welcome from './components/welcome';
import ImagePick from './components/imagePicker';
import Async from './components/asyncStorage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="ImagePick" component={ImagePick} />
        <Stack.Screen
          name="Async"
          component={Async}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
