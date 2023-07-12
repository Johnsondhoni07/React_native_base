import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {theme} from '../Core/Theme';
import {AppStackParamList} from '../Navigator/NavigatorDTO';
import Button from '../Utils/Components/Button';
import {DefaultText} from '../Utils/Components/DefaultText';
import TextInput from '../Utils/Components/TextInput';
import {
  emailValidator,
  passwordValidator,
  responsiveWidth,
} from '../Utils/utis';
import {StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  navigation: NativeStackNavigationProp<AppStackParamList, 'LoginScreen'>;
  // route:RouteProp
};

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = React.useState({value: '', error: ''});
  const [password, setPassword] = React.useState({value: '', error: ''});
  const insets = useSafeAreaInsets();

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation?.navigate('TabHome', {screen: 'Home'});
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={theme?.colors?.background}
          animated={true}
          showHideTransition={'slide'}
          translucent
        />
        <View
          style={{
            height: '100%',
            backgroundColor: theme?.colors?.background,
            paddingHorizontal: responsiveWidth(15),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DefaultText>Login</DefaultText>
          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text: string) => setEmail({value: text, error: ''})}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
          />

          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={text => setPassword({value: text, error: ''})}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />

          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Text style={styles.label}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <Button mode="contained" onPress={_onLoginPressed}>
            Login
          </Button>

          <View style={styles.row}>
            <Text style={styles.label}>Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default LoginScreen;
