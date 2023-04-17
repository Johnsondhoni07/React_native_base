import {AppStackRoutesType} from '../Navigator/NavigatorDTO';
import TabNavigation from '../Navigator/TabNavigation';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/RegisterScreen';

export const unAuthStackDetails: Array<AppStackRoutesType> = [
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
  {
    name: 'TabHome',
    component: TabNavigation,
    // options: {animation: 'slide_from_right', animationDuration: 5000},
  },
];

export const AuthStackDetails: Array<AppStackRoutesType> = [
  {
    name: 'TabHome',
    component: TabNavigation,
    // options: {animation: 'slide_from_right', animationDuration: 5000},
  },
];
