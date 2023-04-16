import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackDetails} from '../Constants/constants';

export interface stackNavigationType {
  LoginScreen: undefined;
  // Details: {
  //   name: string;
  //   birthYear: string;
  // };
}

export const AppNavigationContainer = () => {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{headerShown: false}}>
        {stackDetails.map(e => {
          return (
            <stack.Screen
              name={e.name}
              component={e.component}
              key={e.name}
              options={e?.options}
            />
          );
        })}
      </stack.Navigator>
    </NavigationContainer>
  );
};
