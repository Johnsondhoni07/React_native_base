import React from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppImages} from '../../../Assets';
import {useTheme} from '../../../Contexts/ThemeContexts/ThemeContexts';
import {DefaultText} from '../../../Utils/Components/DefaultText';
import MyPressable from '../../../Utils/Components/MyPressable';

interface Props {
  onNextClick: () => void;
  animationController: React.MutableRefObject<Animated.Value>;
}

const SplashView: React.FC<Props> = ({onNextClick, animationController}) => {
  const window = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const {theme} = useTheme();

  const splashTranslateY = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.8],
    outputRange: [0, -window.height, -window.height],
  });

  const introImageData = Image.resolveAssetSource(AppImages.introduction_image);

  return (
    <Animated.View
      style={{flex: 1, transform: [{translateY: splashTranslateY}]}}>
      <ScrollView style={{flexGrow: 0}} alwaysBounceVertical={false}>
        <View>
          <Image
            style={{
              width: window.width,
              height: undefined,
              aspectRatio: introImageData
                ? introImageData.width / introImageData.height
                : 357 / 470,
            }}
            source={AppImages.introduction_image}
          />
        </View>
        <DefaultText style={{...styles.title, color: theme.textColor}}>
          Clearhead
        </DefaultText>
        <DefaultText style={{...styles.subtitle, color: theme.textColor}}>
          Lorem ipsum dolor sit amet,consectetur{'\n'}adipiscing elit,sed do
          eiusmod tempor{'\n'}incididunt ut labore
        </DefaultText>
      </ScrollView>

      <View style={[styles.footer, {paddingBottom: 8 + insets.bottom}]}>
        <View style={styles.buttonContainer}>
          <MyPressable
            style={{...styles.button, backgroundColor: theme.buttonColor}}
            android_ripple={{color: 'powderblue'}}
            touchOpacity={0.6}
            onPress={() => onNextClick()}>
            <DefaultText
              style={{...styles.buttonText, color: theme.buttonText}}>
              Let's begin
            </DefaultText>
          </MyPressable>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'WorkSans-Bold',
    paddingVertical: 8,
  },
  subtitle: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'WorkSans-Regular',
    paddingHorizontal: 24,
  },
  footer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: 8,
  },
  buttonContainer: {
    borderRadius: 38,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  button: {
    height: 58,
    backgroundColor: 'rgb(21, 32, 54)',
    paddingVertical: 16,
    paddingHorizontal: 56,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'WorkSans-Regular',
    color: 'white',
  },
});

export default SplashView;
