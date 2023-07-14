import React from 'react';
import {Text, View} from 'react-native';
import {HomeScreenNavigationProp} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';
import {useTheme} from '../Contexts/ThemeContexts/ThemeContexts';

const HomeScreen = ({navigation}: HomeScreenNavigationProp) => {
  const {theme} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: theme?.layoutBg}}>
      <Text style={{color: theme.textColor}}>HomeScreen</Text>
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
