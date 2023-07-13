// Types
interface spacingType {
  borderRadius: number;
  layoutPaddingH: number;
  containerPaddingV: number;
  cardMarginB: number;
}

interface typeSizesType {
  FONT_SIZE_SMALL: number;
  FONT_SIZE_MEDIUM: number;
  FONT_SIZE_LARGE: number;
  FONT_WEIGHT_LIGHT: number;
  FONT_WEIGHT_MEDIUM: number;
  FONT_WEIGHT_HEAVY: number;
}

export interface themeType {
  name: string;
  color: string;
  primary: string;
  layoutBg: string;
  cardBg: string;
  accent: string;
  error: string;
  borderColor: string;
  textInputBg: string;
  textColor: string;
  linkColor: string;
  textInputColor: string;
  buttonColor: string;
  buttonText: string;
}

interface themesType {
  light: themeType;
  dark: themeType;
}

// Spacing:- Common margins and paddings
const spacing: spacingType = {
  borderRadius: 8,
  layoutPaddingH: 16,
  containerPaddingV: 10,
  cardMarginB: 16,
};

// Type Sizes:- Font sizes and weights
const typeSizes: typeSizesType = {
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
};

// Themes:- Can alter values here. Can only be consumed through Context (see useTheme.js file)
const themes: themesType = {
  light: {
    name: 'light',
    color: '#3D5A76',
    primary: '#2BBCA2',
    borderColor: '#121212',
    layoutBg: 'rgb(245, 235, 226)',
    textColor: '#000',
    textInputBg: '#ffffff',
    cardBg: '#ffffff',
    accent: '#0071ff',
    error: '#ff1100',
    linkColor: '#600EE6',
    textInputColor: '#000',
    buttonColor: '#66489c',
    buttonText: '#fff',
  },
  dark: {
    name: 'dark',
    color: '#000',
    primary: '#2BBCA2',
    layoutBg: '#121212',
    textColor: '#fff',
    textInputBg: '#ccc',
    borderColor: '#600EE6',
    cardBg: '#1e1e1e',
    accent: '#0071ff',
    error: '#B00020',
    linkColor: '#600EE6',
    textInputColor: '#000',
    buttonColor: '#66489c',
    buttonText: '#fff',
  },
};

export {spacing, typeSizes, themes};
