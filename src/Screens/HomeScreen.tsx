import React from 'react';
import {Text, View} from 'react-native';
import {HomeScreenNavigationProp} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';

const HomeScreen = ({navigation}: HomeScreenNavigationProp) => {
  return (
    <View style={{flex: 1}}>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation?.navigate('Personal');
        }}>
        Go to Personal
      </Button>
    </View>
  );
};

export default HomeScreen;
