import React, {memo, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../Contexts/ThemeContexts/ThemeContexts';
import {AppStackParamList} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';
import {DefaultText} from '../Utils/Components/DefaultText';
import LayoutStatusBar from '../Utils/Components/LayoutStatusBar';
import TextInput from '../Utils/Components/TextInput';
import TouchableNoFeedBack from '../Utils/Components/TouchableNoFeedBack';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  responsiveHeight,
  responsiveScale,
  responsiveWidth,
} from '../Utils/utis';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'RegisterScreen'>;
};

const RegisterScreen = ({navigation}: Props) => {
  const {theme} = useTheme();
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }

    navigation?.navigate('TabHome', {screen: 'Home'});
  };

  const textInputThemeStyle = {
    backgroundColor: theme.textInputBg,
    color: theme.textInputColor,
    borderColor: theme.borderColor,
  };

  return (
    <LayoutStatusBar>
      <View
        style={{
          height: '100%',
          backgroundColor: theme?.layoutBg,
          paddingHorizontal: responsiveWidth(15),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DefaultText style={{color: theme.textColor}}>Register</DefaultText>
        <TextInput
          placeholder="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({value: text, error: ''})}
          error={!!name.error}
          errorText={name.error}
          placeholderTextColor={theme.color}
          style={{
            ...textInputThemeStyle,
            ...styles.textinputStyle,
          }}
        />

        <TextInput
          placeholder="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholderTextColor={theme.color}
          style={{
            ...textInputThemeStyle,
            ...styles.textinputStyle,
          }}
        />

        <TextInput
          placeholder="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({value: text, error: ''})}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
          placeholderTextColor={theme.color}
          style={{
            ...textInputThemeStyle,
            ...styles.textinputStyle,
          }}
        />

        <Button
          mode="contained"
          onPress={_onSignUpPressed}
          style={styles.button}>
          Sign Up
        </Button>

        <View style={styles.row}>
          <Text style={{color: theme.textColor}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[styles.link, {color: theme.linkColor}]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutStatusBar>
  );
};

const styles = StyleSheet.create({
  textinputStyle: {
    borderWidth: responsiveScale(1),
    marginTop: responsiveHeight(10),
    borderRadius: responsiveScale(7),
    paddingLeft: responsiveWidth(10),
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});

export default memo(RegisterScreen);
