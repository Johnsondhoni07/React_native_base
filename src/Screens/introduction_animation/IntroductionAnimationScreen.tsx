import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import {
  SplashView,
  RelaxView,
  CareView,
  MoodDiaryView,
  WelcomeView,
  TopBackSkipView,
  CenterNextButton,
} from './scenes';
import {useSwipe} from '../../Hooks/UseSwipe';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../Navigator/NavigatorDTO';
import {useTheme} from '../../Contexts/ThemeContexts/ThemeContexts';

type Props = {
  navigation: NativeStackNavigationProp<
    AppStackParamList,
    'IntroductionScreen'
  >;
  // route:RouteProp
};

const IntroductionAnimationScreen = ({navigation}: Props) => {
  const window = useWindowDimensions();
  const {theme} = useTheme();

  const [currentPage, setCurrentPage] = useState(0);

  const animationController = useRef<Animated.Value>(new Animated.Value(0));
  const animValue = useRef<number>(0);

  useEffect(() => {
    animationController.current.addListener(({value}) => {
      animValue.current = value;
      setCurrentPage(value);
    });
  }, []);

  const relaxTranslateY = animationController.current.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8],
    outputRange: [window.height, 0, 0, 0, 0],
  });

  const playAnimation = useCallback(
    (toValue: number, duration: number = 1600) => {
      Animated.timing(animationController.current, {
        toValue,
        duration,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
        // here it is false only cause of width animation in 'NextButtonArrow.tsx', as width doesn't support useNativeDriver: true
        // TODO:- find better solution so we can use true here and animation also work
        useNativeDriver: false,
      }).start();
    },
    [],
  );

  const onNextClick = useCallback(() => {
    let toValue;
    if (animValue.current === 0) {
      toValue = 0.2;
    } else if (animValue.current >= 0 && animValue.current <= 0.2) {
      toValue = 0.4;
    } else if (animValue.current > 0.2 && animValue.current <= 0.4) {
      toValue = 0.6;
    } else if (animValue.current > 0.4 && animValue.current <= 0.6) {
      toValue = 0.8;
    } else if (animValue.current > 0.6 && animValue.current <= 0.8) {
      navigation.navigate('RegisterScreen');
    }

    toValue !== undefined && playAnimation(toValue);
  }, [playAnimation, navigation]);

  const onBackClick = useCallback(() => {
    let toValue;
    if (animValue.current >= 0.2 && animValue.current < 0.4) {
      toValue = 0.0;
    } else if (animValue.current >= 0.4 && animValue.current < 0.6) {
      toValue = 0.2;
    } else if (animValue.current >= 0.6 && animValue.current < 0.8) {
      toValue = 0.4;
    } else if (animValue.current === 0.8) {
      toValue = 0.6;
    }

    toValue !== undefined && playAnimation(toValue);
  }, [playAnimation]);

  const onSkipClick = useCallback(() => {
    playAnimation(0.8, 1200);
  }, [playAnimation]);

  const onSwipeLeft = () => {
    onNextClick();
  };

  const onSwipeRight = () => {
    onBackClick();
  };

  const onSwipeUp = () => {
    onNextClick();
  };

  const onSwipeDown = () => {
    onBackClick();
  };

  const {onTouchStart, onTouchEnd} = useSwipe(
    {onSwipeLeft, onSwipeDown, onSwipeRight, onSwipeUp},
    6,
  );

  const navigateToLogin = React.useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);

  return (
    <View
      style={{flex: 1, backgroundColor: theme.layoutBg}}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <StatusBar barStyle={`${currentPage > 0 ? 'dark' : 'light'}-content`} />
      <SplashView {...{onNextClick, animationController, onSwipeUp}} />

      <Animated.View
        style={[
          styles.scenesContainer,
          {transform: [{translateY: relaxTranslateY}]},
        ]}>
        <RelaxView
          {...{
            animationController,
            onSwipeDown,
            onSwipeLeft,
          }}
        />

        <CareView
          {...{
            animationController,
            onSwipeLeft,
            onSwipeRight,
          }}
        />

        <MoodDiaryView
          {...{
            animationController,
            onSwipeLeft,
            onSwipeRight,
          }}
        />

        <WelcomeView
          {...{
            animationController,
            onSwipeLeft,
            onSwipeRight,
          }}
        />
      </Animated.View>

      <TopBackSkipView {...{onBackClick, onSkipClick, animationController}} />

      <CenterNextButton
        {...{onNextClick, animationController, navigateToLogin}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scenesContainer: {
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
});

export default IntroductionAnimationScreen;
