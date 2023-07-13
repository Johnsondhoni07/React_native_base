/**
 * Dark/Light Mode
 */

import * as React from 'react';
import {themeType, themes} from './Theme';
import {useColorScheme} from 'react-native';

// Import preconfigured themes from theme file

// Types
export interface ThemeContextInterface {
  theme: themeType;
  setTheme: (value: themeType) => void;
}

interface ThemeProviderInterface {
  children: React.ReactNode;
}

// Context
const ThemeContext = React.createContext({} as ThemeContextInterface);

// Provider to be used in index/App/or top of any parent
export const ThemeProvider = ({
  children,
}: ThemeProviderInterface): JSX.Element => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState(
    colorScheme === 'light' ? themes.light : themes.dark,
  );
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// useTheme hook for easy access to theme and setTheme
export const useTheme = () => {
  const state = React.useContext(ThemeContext);

  const {theme, setTheme} = state;

  const toggleTheme = (v: boolean) => {
    console.log('toggleTheme');
    setTheme(v ? themes.dark : themes.light);
  };

  return {theme, toggleTheme};
};
