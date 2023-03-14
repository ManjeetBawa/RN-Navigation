import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './components/welcome';
import ImagePick from './components/imagePicker';
import Async from './components/asyncStorage';
import DateTimePick from './components/datetimepicker';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <BottomTabs.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Input" component={Input} /> */}
        <BottomTabs.Screen name="DateTimePick" component={DateTimePick} />
        <BottomTabs.Screen name="ImagePick" component={ImagePick} />
        <BottomTabs.Screen
          name="Async"
          component={Async}
          options={
            {
              // headerShown: true,
              // headerStyle: {
              //   backgroundColor: '#66347F',
              // },
              // headerTintColor: 'white'
            }
          }
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
