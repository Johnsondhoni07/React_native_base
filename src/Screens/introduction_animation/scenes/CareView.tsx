import React, {useRef} from 'react';
import {StyleSheet, Text, Animated, useWindowDimensions} from 'react-native';
import {AppImages} from '../../../Assets';
import {useTheme} from '../../../Contexts/ThemeContexts/ThemeContexts';
import {DefaultText} from '../../../Utils/Components/DefaultText';

interface Props {
  animationController: React.MutableRefObject<Animated.Value>;
}

const IMAGE_WIDTH = 350;
const IMAGE_HEIGHT = 250;

const CareView: React.FC<Props> = ({animationController}) => {
  const window = useWindowDimensions();
  const {theme} = useTheme();

  const careRef = useRef<Text | null>(null);

  const slideAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [window.width, window.width, 0, -window.width, -window.width],
  });

  const careEndVal = 26 * 2; // 26 being text's height (font size)
  const careAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [careEndVal, careEndVal, 0, -careEndVal, -careEndVal],
  });

  const imageEndVal = IMAGE_WIDTH * 4;
  const imageAnim = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [imageEndVal, imageEndVal, 0, -imageEndVal, -imageEndVal],
  });

  return (
    <Animated.View
      style={[styles.container, {transform: [{translateX: slideAnim}]}]}>
      <Animated.Image
        style={[styles.image, {transform: [{translateX: imageAnim}]}]}
        source={AppImages.care_image}
      />
      <Animated.Text
        style={[
          styles.title,
          {
            color: theme?.textColor,
            transform: [{translateX: careAnim}],
          },
        ]}
        ref={careRef}>
        Care
      </Animated.Text>
      <DefaultText
        style={{
          color: theme?.textColor,
          ...styles.subtitle,
        }}>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod
        tempor incididunt ut labore
      </DefaultText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 100,
  },
  image: {
    maxWidth: IMAGE_WIDTH,
    maxHeight: IMAGE_HEIGHT,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'WorkSans-Bold',
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 64,
    paddingVertical: 16,
  },
});

export default CareView;
