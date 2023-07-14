import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '../../Contexts/ThemeContexts/ThemeContexts';
import {AppStackParamList} from '../../Navigator/NavigatorDTO';
import Button from '../../Utils/Components/Button';
import {DefaultText} from '../../Utils/Components/DefaultText';
import LayoutStatusBar from '../../Utils/Components/LayoutStatusBar';
import TextInput from '../../Utils/Components/TextInput';
import {emailValidator, passwordValidator} from '../../Utils/utis';
import loginTheme from './LoginStyles';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'LoginScreen'>;
  // route:RouteProp
};

const LoginScreen = ({navigation}: Props) => {
  const {theme, toggleTheme} = useTheme();
  const loginStyles = loginTheme();
  const [email, setEmail] = React.useState({value: '', error: ''});
  const [password, setPassword] = React.useState({value: '', error: ''});

  const onLoginPressed = React.useCallback(() => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail(prev => {
        return {...prev, error: emailError};
      });
      setPassword(prev => {
        return {...prev, error: passwordError};
      });
      return;
    }
    navigation?.replace('TabHome', {screen: 'Home'});
  }, [navigation, email, password]);

  const onChangeEmail = React.useCallback(
    (text: string) => setEmail({value: text, error: ''}),
    [],
  );

  const onChangePassword = React.useCallback(
    (text: string) => setPassword({value: text, error: ''}),
    [],
  );

  const onPressRegisterScreen = React.useCallback(
    () => navigation.navigate('RegisterScreen'),
    [navigation],
  );

  const onChangeTheme = React.useCallback(
    () => toggleTheme(theme.name !== 'dark'),
    [toggleTheme, theme],
  );

  return (
    <LayoutStatusBar>
      <View style={loginStyles.container}>
        <DefaultText style={{color: theme.textColor}}>Login</DefaultText>
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={onChangeEmail}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholderTextColor={theme.color}
          style={loginStyles?.textInputThemeStyle}
        />

        <TextInput
          placeholder="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={onChangePassword}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
          placeholderTextColor={theme.color}
          style={loginStyles?.textInputThemeStyle}
        />

        <View style={loginStyles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={{color: theme.textColor}}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          style={{backgroundColor: theme.buttonColor}}
          onPress={onLoginPressed}>
          Login
        </Button>

        <Button
          mode="contained"
          style={{backgroundColor: theme.buttonColor}}
          onPress={onChangeTheme}>
          ChangeTheme
        </Button>

        <View style={loginStyles.row}>
          <Text style={{color: theme.textColor}}>Don’t have an account? </Text>
          <TouchableOpacity onPress={onPressRegisterScreen}>
            <Text style={loginStyles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutStatusBar>
  );
};

export default LoginScreen;
