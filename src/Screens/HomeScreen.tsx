import React from 'react';
import {Text, View} from 'react-native';
import {HomeScreenNavigationProp} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';
import {useTheme} from '../Contexts/ThemeContexts/ThemeContexts';
import LayoutStatusBar from '../Utils/Components/LayoutStatusBar';

const HomeScreen = ({navigation}: HomeScreenNavigationProp) => {
  const {theme} = useTheme();

  return (
    <LayoutStatusBar style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: theme?.layoutBg}}>
        <Text style={{color: theme.textColor}}>HomeScreen</Text>
        <Button
          onPress={() => {
            navigation?.navigate('Personal');
          }}>
          Go to Personal
        </Button>
      </View>
    </LayoutStatusBar>
  );
};

export default HomeScreen;
