import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../Contexts/ThemeContexts/ThemeContexts';
import {AppStackParamList} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';
import {DefaultText} from '../Utils/Components/DefaultText';
import LayoutStatusBar from '../Utils/Components/LayoutStatusBar';
import TextInput from '../Utils/Components/TextInput';
import TouchableNoFeedBack from '../Utils/Components/TouchableNoFeedBack';
import {
  emailValidator,
  passwordValidator,
  responsiveHeight,
  responsiveScale,
  responsiveWidth,
} from '../Utils/utis';
import styleTheme from './ThemeStyles';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'LoginScreen'>;
  // route:RouteProp
};

const LoginScreen = ({navigation}: Props) => {
  const {theme, toggleTheme} = useTheme();
  const stylesTheme = styleTheme();
  const [email, setEmail] = React.useState({value: '', error: ''});
  const [password, setPassword] = React.useState({value: '', error: ''});

  const _onLoginPressed = React.useCallback(() => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation?.navigate('TabHome', {screen: 'Home'});
  }, [navigation]);

  return (
    <TouchableNoFeedBack onPress={Keyboard.dismiss}>
      <LayoutStatusBar>
        <View
          style={[
            styles.container,
            {
              backgroundColor: theme?.layoutBg,
            },
          ]}>
          <DefaultText style={{color: theme.textColor}}>Login</DefaultText>
          <TextInput
            placeholder="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text: string) => setEmail({value: text, error: ''})}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            placeholderTextColor={theme.color}
            style={stylesTheme?.textInputThemeStyle}
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
            style={stylesTheme?.textInputThemeStyle}
          />

          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={{color: theme.textColor}}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>

          <Button
            mode="contained"
            style={{backgroundColor: theme.buttonColor}}
            onPress={_onLoginPressed}>
            Login
          </Button>

          <Button
            mode="contained"
            style={{backgroundColor: theme.buttonColor}}
            onPress={() => toggleTheme(theme.name !== 'dark')}>
            ChangeTheme
          </Button>

          <View style={styles.row}>
            <Text style={{color: theme.textColor}}>
              Don’t have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={[styles.link, {color: theme.linkColor}]}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LayoutStatusBar>
    </TouchableNoFeedBack>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: responsiveWidth(15),
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});

export default LoginScreen;
