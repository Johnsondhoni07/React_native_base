import React from 'react';
import {Text, View} from 'react-native';
import {PersonalScreenNavigationProp} from '../Navigator/NavigatorDTO';

const PersonalScreen = ({navigation}: PersonalScreenNavigationProp) => {
  React.useEffect(() => {
    navigation?.setOptions({tabBarStyle: {display: 'none'}});
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text>Personal</Text>
    </View>
  );
};

export default PersonalScreen;
