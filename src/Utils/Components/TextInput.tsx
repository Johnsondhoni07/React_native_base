import React, {memo} from 'react';
import {View, StyleSheet, Text, TextInput as Input} from 'react-native';
// import {TextInput as Input} from 'react-native-paper';
import {responsiveHeight, responsiveScale, responsiveWidth} from '../utis';
import {useTheme} from '../../Contexts/ThemeContexts/ThemeContexts';

type Props = React.ComponentProps<typeof Input> & {
  error?: boolean;
  errorText?: string;
};

const TextInput = ({errorText, ...props}: Props) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <Input style={styles.input} {...props} />
      {errorText ? (
        <Text style={{...styles.error, color: theme?.error}}>{errorText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    // backgroundColor: theme.colors.surface,
  },
  error: {
    fontSize: responsiveScale(14),
    paddingHorizontal: responsiveWidth(4),
    paddingTop: responsiveHeight(4),
  },
});

export default memo(TextInput);
