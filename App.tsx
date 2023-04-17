import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Login from './src/Screens/Login';
import {AppNavigationContainer} from './src/Navigator/AppNavigationContainer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <AppNavigationContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
