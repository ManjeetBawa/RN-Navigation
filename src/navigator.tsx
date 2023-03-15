import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './components/welcome';
import ImagePick from './components/imagePicker';
import Async from './components/asyncStorage';
import DateTimePick from './components/datetimepicker';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const HomeIcon = () => {
  return (
    <Image
      style={{width: 25, height: 25}}
      source={{
        uri: 'https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png',
      }}
    />
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <BottomTabs.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: () => {
              return <HomeIcon />;
            },
          }}
        />
        {/* <Stack.Screen name="Input" component={Input} /> */}
        <BottomTabs.Screen name="DateTimePick" component={DateTimePick} />
        <BottomTabs.Screen name="ImagePick" component={ImagePick} />
        <BottomTabs.Screen
          name="Async"
          component={Async}
          options={{
            tabBarIcon: () => {
              return <Icon name="american-football" size={30} color="black" />;
            },
            // headerShown: true,
            // headerStyle: {
            //   backgroundColor: '#66347F',
            // },
            // headerTintColor: 'white'
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
