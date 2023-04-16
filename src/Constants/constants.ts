import React, {FunctionComponent} from 'react';
import LoginScreen from '../Screens/Login';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import RegisterScreen from '../Screens/RegisterScreen';
import {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';
import {stackNavigationType} from '../Navigator/AppNavigationContainer';

export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  >
>;

// becomes one line typings for each stack
// type OtherStackRoutesType = StackRoutesType<OtherStackParamList>;
// type AnotherStackRoutesType = StackRoutesType<AnotherStackParamList>;

// type AppStackRoutesType = StackRoutesType<stackNavigationType>;

export const stackDetails =
  // Array<{
  //   name: string;
  //   component: any;
  //   options: NativeStackNavigationOptions;
  // }>
  [
    {
      name: 'LoginScreen',
      component: LoginScreen,
      options: {animation: 'default'},
    },
    {
      name: 'RegisterScreen',
      component: RegisterScreen,
      options: {},
    },
  ];
