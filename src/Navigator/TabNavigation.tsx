import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import PersonalScreen from '../Screens/PersonalScreen';
import {TabParamList} from './NavigatorDTO';

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
      {/* {tabBarRoutes.map(stackRoute => {
        return <Tab.Screen key={stackRoute.name} {...stackRoute} />;
      })} */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
