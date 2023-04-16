import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const responsiveWidth = (size: number) =>
  (width / guidelineBaseWidth) * size;
export const responsiveHeight = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const responsiveScale = (size: number, factor = 0.5) =>
  size + (responsiveWidth(size) - size) * factor;

export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};
// export {responsiveWidth, responsiveHeight, moderateScale};
