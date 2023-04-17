import type {RouteConfig, StackNavigationState} from '@react-navigation/core';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import * as React from 'react';
import {View} from 'react-native';

// stack param list type
type AppStackParamList = {
  Home: undefined;
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
};

// type of the single route in app stack
type AppStackRoutesType = RouteConfig<
  AppStackParamList,
  keyof AppStackParamList,
  StackNavigationState<AppStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;

// mocking the screen components for the sake of example
const Home = () => <View />;
const Notifications = () => <View />;
const Profile = () => <View />;
const Settings = () => <View />;

// strictly typed array of app stack routes
const appStackRoutes: Array<AppStackRoutesType> = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Notifications',
    component: Notifications,
  },
  {
    name: 'Profile',
    component: Profile,
    options: {},
  },
  {
    name: 'Settings',
    component: Settings,
  },
];

const Stack = createNativeStackNavigator<AppStackParamList>();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* * mapping the app stack routes */}
        {appStackRoutes.map(stackRoute => (
          <Stack.Screen key={stackRoute.name} {...stackRoute} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
