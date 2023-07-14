import React from 'react';
import {Text, View} from 'react-native';
import {PersonalScreenNavigationProp} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';
import {useTheme} from '../Contexts/ThemeContexts/ThemeContexts';
import LayoutStatusBar from '../Utils/Components/LayoutStatusBar';

const PersonalScreen = ({navigation}: PersonalScreenNavigationProp) => {
  const {theme} = useTheme();

  React.useEffect(() => {
    navigation?.setOptions({tabBarStyle: {display: 'none'}});
  }, []);
  return (
    <LayoutStatusBar style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: theme?.layoutBg}}>
        <Text style={{color: theme.textColor}}>Personal</Text>
        <Button
          onPress={() => {
            navigation?.navigate('LoginScreen');
          }}>
          Go to Sign Up
        </Button>
      </View>
    </LayoutStatusBar>
  );
};

export default PersonalScreen;
