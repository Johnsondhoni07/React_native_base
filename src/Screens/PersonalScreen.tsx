import React from 'react';
import {Text, View} from 'react-native';
import {PersonalScreenNavigationProp} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';

const PersonalScreen = ({navigation}: PersonalScreenNavigationProp) => {
  React.useEffect(() => {
    navigation?.setOptions({tabBarStyle: {display: 'none'}});
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text>Personal</Text>
      <Button
        onPress={() => {
          navigation?.navigate('LoginScreen');
        }}>
        Go to Sign Up
      </Button>
    </View>
  );
};

export default PersonalScreen;
