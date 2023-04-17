import React, {memo, useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TextInput from '../Utils/Components/TextInput';
import Button from '../Utils/Components/Button';
import {theme} from '../Core/Theme';
import {emailValidator, responsiveHeight, responsiveWidth} from '../Utils/utis';
import {AppStackParamList} from '../Navigator/NavigatorDTO';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<
    AppStackParamList,
    'ForgotPasswordScreen'
  >;
};

const ForgotPasswordScreen = ({navigation}: Props) => {
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
          backgroundColor: theme?.colors?.background,
          paddingHorizontal: responsiveWidth(15),
        }}>
        <TextInput
          label="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={(text: string) => setEmail({value: text, error: ''})}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
          Send Reset Instructions
        </Button>

        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.label}>← Back to login</Text>
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
    color: theme.colors.secondary,
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
