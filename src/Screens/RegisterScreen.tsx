import React, {memo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  StatusBar,
} from 'react-native';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  responsiveWidth,
} from '../Utils/utis';
import TextInput from '../Utils/Components/TextInput';
import Button from '../Utils/Components/Button';
import {theme} from '../Core/Theme';
import {DefaultText} from '../Utils/Components/DefaultText';
import TouchableNoFeedBack from '../Utils/Components/TouchableNoFeedBack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  navigation: any;
};

const RegisterScreen = ({navigation}: Props) => {
  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const insets = useSafeAreaInsets();

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

    navigation.navigate('Dashboard');
  };

  return (
    <TouchableNoFeedBack
      onPress={Keyboard.dismiss}
      style={{backgroundColor: 'red', height: '100%', width: '100%', flex: 1}}>
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
          <DefaultText>Register</DefaultText>
          <TextInput
            label="Name"
            returnKeyType="next"
            value={name.value}
            onChangeText={text => setName({value: text, error: ''})}
            error={!!name.error}
            errorText={name.error}
          />

          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={text => setEmail({value: text, error: ''})}
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

          <Button
            mode="contained"
            onPress={_onSignUpPressed}
            style={styles.button}>
            Sign Up
          </Button>

          <View style={styles.row}>
            <Text style={styles.label}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableNoFeedBack>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
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
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
