import {
  AppBottomTabRoutesType,
  AppStackRoutesType,
} from '../Navigator/NavigatorDTO';
import TabNavigation from '../Navigator/TabNavigation';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/Login';
import PersonalScreen from '../Screens/PersonalScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import {IntroductionAnimationScreen} from '../Screens/introduction_animation';

export const authRoutes: Array<AppStackRoutesType> = [
  {
    name: 'IntroductionScreen',
    component: IntroductionAnimationScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: {animation: 'slide_from_left', animationDuration: 5000},
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
    options: {animation: 'slide_from_left', animationDuration: 5000},
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

export const protectedRoutes: Array<AppStackRoutesType> = [
  {
    name: 'TabHome',
    component: TabNavigation,
    // options: {animation: 'slide_from_right', animationDuration: 5000},
  },
];

// export const tabBarRoutes: Array<AppBottomTabRoutesType> = [
//   {
//     name: 'Home',
//     component: HomeScreen,
//   },
//   {
//     name: 'Personal',
//     component: PersonalScreen,
//   },
// ];
