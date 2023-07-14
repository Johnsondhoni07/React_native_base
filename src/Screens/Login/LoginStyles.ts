import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from '../../Contexts/ThemeContexts/ThemeContexts';
import {
  responsiveHeight,
  responsiveScale,
  responsiveWidth,
} from '../../Utils/utis';

const loginTheme = () => {
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
    container: {
      height: '100%',
      paddingHorizontal: responsiveWidth(15),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme?.layoutBg,
    },
    textinputStyle: {
      borderWidth: responsiveScale(1),
      marginTop: responsiveHeight(10),
      borderRadius: responsiveScale(7),
      paddingLeft: responsiveWidth(10),
    },
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    link: {
      fontWeight: 'bold',
      color: theme.linkColor,
    },
  });
};

export default loginTheme;
