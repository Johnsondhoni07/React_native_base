import React from 'react';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteConfig,
  StackNavigationState,
  TabNavigationState,
} from '@react-navigation/native';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';

//Add Tab Screens Here
export type TabParamList = {
  Home: undefined;
  Personal: undefined;
};

//Add Stack Screen Here
export type AppStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  IntroductionScreen: undefined;
  TabHome: NavigatorScreenParams<TabParamList>; //For TAB Screen
};

export type AppStackRoutesType = RouteConfig<
  AppStackParamList,
  keyof AppStackParamList,
  StackNavigationState<AppStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;

export type AppBottomTabRoutesType = RouteConfig<
  TabParamList,
  keyof TabParamList,
  TabNavigationState<TabParamList>,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap
>;

export type HomeScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<AppStackParamList>
>;

export type PersonalScreenNavigationProp = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Personal'>,
  NativeStackScreenProps<AppStackParamList>
>;
