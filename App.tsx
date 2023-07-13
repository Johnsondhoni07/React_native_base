import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {ThemeProvider} from './src/Contexts/ThemeContexts/ThemeContexts';
import {AppNavigationContainer} from './src/Navigator/AppNavigationContainer';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ThemeProvider>
        <AppNavigationContainer />
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {flex: 1},
});

export default App;
