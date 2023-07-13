import React, {memo} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {theme} from '../../Core/Theme';
import {responsiveHeight, responsiveScale} from '../utis';

type Props = React.ComponentProps<typeof PaperButton> & {
  textStyle?: StyleProp<TextStyle>;
};

const Button = ({mode, style, children, textStyle, ...props}: Props) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && {backgroundColor: theme.colors.surface},
      style,
    ]}
    labelStyle={[styles.text, textStyle]}
    mode={mode}
    {...props}>
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: responsiveHeight(10),
  },
  text: {
    fontWeight: 'bold',
    fontSize: responsiveScale(15),
    lineHeight: responsiveHeight(26),
    width: '90%',
  },
});

export default memo(Button);
