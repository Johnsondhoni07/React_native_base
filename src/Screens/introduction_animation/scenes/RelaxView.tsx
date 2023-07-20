import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {AppImages} from '../../../Assets';
import {useTheme} from '../../../Contexts/ThemeContexts/ThemeContexts';

interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

const IMAGE_WIDTH = 350;
const IMAGE_HEIGHT = 250;

const RelaxView: React.FC<Props> = ({animationController}) => {
  const window = useWindowDimensions();
  const {theme} = useTheme();

  const relaxRef = useRef<Text | null>(null);

  const relaxAnimation = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.8],
    outputRange: [-(26 * 2), 0, 0],
  });
  const textAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [0, 0, -window.width * 2, 0, 0],
  });
  const imageAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [0, 0, -350 * 4, 0, 0],
  });
  const slideAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.8],
    outputRange: [0, 0, -window.width, -window.width],
  });

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateX: slideAnim}]}]}>
      <Animated.Text
        style={[
          styles.title,
          {
            color: theme.textColor,
            transform: [{translateY: relaxAnimation}],
          },
        ]}
        ref={relaxRef}>
        Relax
      </Animated.Text>
      <Animated.Text
        style={[
          styles.subtitle,
          {
            color: theme.textColor,
            transform: [{translateX: textAnim}],
          },
        ]}>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod
        tempor incididunt ut labore
      </Animated.Text>
      <Animated.Image
        style={[styles.image, {transform: [{translateX: imageAnim}]}]}
        source={AppImages.relax_image}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'WorkSans-Bold',
  },
  subtitle: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 64,
    paddingVertical: 16,
  },
  image: {
    maxWidth: IMAGE_WIDTH,
    maxHeight: IMAGE_HEIGHT,
  },
});

export default RelaxView;
