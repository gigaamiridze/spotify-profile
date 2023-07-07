export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  transition: string;
}

interface IColors {
  white: string;
  black: string;
  navBlack: string;
  eerieBlack: string;
  lightGreen: string;
  green: string;
}

interface IFonts {
  primary: string;
}