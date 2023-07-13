import React, {ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../Contexts/ThemeContexts/ThemeContexts';

type Props = React.ComponentProps<typeof View>;
const LayoutStatusBar = ({children, style, ...props}: Props) => {
  const insets = useSafeAreaInsets();
  const {theme} = useTheme();
  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}
      {...props}>
      <StatusBar
        barStyle={`${theme.name === 'dark' ? 'light' : 'dark'}-content`}
        backgroundColor={theme?.layoutBg}
        animated={true}
        showHideTransition={'slide'}
        translucent
      />
      {children}
    </View>
  );
};

export default LayoutStatusBar;
