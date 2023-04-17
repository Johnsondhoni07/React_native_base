import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackDetails} from '../Constants/constants';
import {AppStackParamList} from './NavigatorDTO';

export const AppNavigationContainer = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        {stackDetails.map(stackRoute => {
          return <Stack.Screen key={stackRoute.name} {...stackRoute} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
