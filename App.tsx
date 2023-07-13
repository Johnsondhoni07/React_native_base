import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from './src/Contexts/ThemeContexts/ThemeContexts';
import {AppNavigationContainer} from './src/Navigator/AppNavigationContainer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ThemeProvider>
        <AppNavigationContainer />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {flex: 1},
});

export default App;
