import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/NoticesScreen';
import Ouvir from '../pages/AudioScreen';
import Videos from '../pages/Videos';

const Tab = createBottomTabNavigator();

const icons = {
  HOME: {
    name: 'home-outline',
  },
  OUVIR: {
    name: 'volume-high-outline',
  },
  VIDEOS: {
    name: 'videocam-outline',
  },
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
        },
        activeTintColor: '#74B868',
        inactiveTintColor: '#000',
      }}>
      <Tab.Screen name="HOME" component={Home} />
      <Tab.Screen name="OUVIR" component={Ouvir} />
      <Tab.Screen name="VIDEOS" component={Videos} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
