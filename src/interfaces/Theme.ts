export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  easing: IEasing;
  transition: string;
}

interface IColors {
  white: string;
  black: string;
  navBlack: string;
  lightGreen: string;
  green: string;
  blue: string;
  grey: string;
  darkGrey: string;
  lightGrey: string;
  lightestGrey: string;
}

interface IFonts {
  primary: string;
}

interface IEasing {
  easeInCubic: string;
  easeOutCubic: string;
  easeInOutCubic: string;
  easeInExpo: string;
  easeOutExpo: string;
  easeInOutExpo: string;
  easeInBack: string;
  easeOutBack: string;
  easeInOutBack: string;
}