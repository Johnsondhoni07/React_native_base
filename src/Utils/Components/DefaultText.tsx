import React from 'react';
import {Text, TextProps} from 'react-native';

export const DefaultText: React.FC<TextProps> = props => {
  return (
    <Text {...props} style={props.style}>
      {props.children}
    </Text>
  );
};
