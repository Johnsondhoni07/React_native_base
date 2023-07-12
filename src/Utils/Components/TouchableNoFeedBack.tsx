import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

type Props = React.ComponentProps<typeof TouchableWithoutFeedback>;
const TouchableNoFeedBack = ({children, style, onPress, ...props}: Props) => {
  return (
    <TouchableWithoutFeedback style={style} onPress={onPress} {...props}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default TouchableNoFeedBack;
