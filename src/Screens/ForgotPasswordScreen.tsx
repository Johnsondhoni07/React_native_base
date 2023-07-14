import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {memo, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useTheme} from '../Contexts/ThemeContexts/ThemeContexts';
import {AppStackParamList} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';
import {DefaultText} from '../Utils/Components/DefaultText';
import TextInput from '../Utils/Components/TextInput';
import {emailValidator, responsiveHeight, responsiveWidth} from '../Utils/utis';
import styleTheme from './ThemeStyles';

type Props = {
  navigation: NativeStackNavigationProp<
    AppStackParamList,
    'ForgotPasswordScreen'
  >;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
  const {theme, toggleTheme} = useTheme();
  const stylesTheme = styleTheme();
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.navigate('LoginScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          height: '100%',
          backgroundColor: theme?.layoutBg,
          paddingHorizontal: responsiveWidth(15),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DefaultText style={{color: theme.textColor}}>
          Forgot Password
        </DefaultText>

        <TextInput
          placeholder="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text: string) => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={stylesTheme?.textInputThemeStyle}
        />

        <Button
          mode="contained"
          onPress={_onSendPressed}
          style={{...styles.button, backgroundColor: theme.buttonColor}}>
          Send Reset Instructions
        </Button>

        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.label, {color: theme.textColor}]}>
            ← Back to login
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: responsiveHeight(12),
  },
  button: {
    marginTop: responsiveHeight(12),
  },
  label: {
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
