export interface ITheme {
  colors: IColors;
  fonts: IFonts;
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