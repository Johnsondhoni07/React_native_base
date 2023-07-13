import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '../Contexts/ThemeContexts/ThemeContexts';
import {
  responsiveHeight,
  responsiveScale,
  responsiveWidth,
} from '../Utils/utis';

const styleTheme = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    textInputThemeStyle: {
      backgroundColor: theme.textInputBg,
      color: theme.textInputColor,
      borderColor: theme.borderColor,
      borderWidth: responsiveScale(1),
      marginTop: responsiveHeight(10),
      borderRadius: responsiveScale(7),
      paddingLeft: responsiveWidth(10),
    },
  });
};

export default styleTheme;
