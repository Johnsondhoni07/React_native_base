import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {TabParamList} from './NavigatorDTO';
import HomeScreen from '../Screens/HomeScreen';
import PersonalScreen from '../Screens/PersonalScreen';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<TabParamList>();

  return (
    <Tab.Navigator
      initialRouteName="Personal"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{tabBarStyle: {display: 'none'}}}
      />
      <Tab.Screen name="Personal" component={PersonalScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
