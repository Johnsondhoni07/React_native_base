import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {protectedRoutes, authRoutes} from '../Constants/constants';
import {AppStackParamList} from './NavigatorDTO';

export const AppNavigationContainer = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IntroductionScreen"
        screenOptions={{headerShown: false}}>
        {true
          ? authRoutes.map(stackRoute => {
              return <Stack.Screen key={stackRoute.name} {...stackRoute} />;
            })
          : protectedRoutes.map(stackRoute => {
              return <Stack.Screen key={stackRoute.name} {...stackRoute} />;
            })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
