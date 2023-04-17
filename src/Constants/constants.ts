import {AppStackRoutesType} from '../Navigator/NavigatorDTO';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/RegisterScreen';

export const stackDetails: Array<AppStackRoutesType> = [
  {
    name: 'LoginScreen',
    component: LoginScreen,
    // options: {animation: 'slide_from_right', animationDuration: 5000},
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
    // options: {animation: 'slide_from_left', animationDuration: 5000},
  },
  {
    name: 'ForgotPasswordScreen',
    component: ForgotPasswordScreen,
  },
];
