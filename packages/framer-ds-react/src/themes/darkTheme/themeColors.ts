import colorPalette from '@src/tokens/colorPalette'
import { StitchesColors } from '../types'

// const themeColor: Colors = {
//   transparent: colorPalette.transparent,
//   current: colorPalette.current,
//   black: colorPalette.black,
//   white: colorPalette.white,

//   primary: colorPalette.purpleDark,
//   secondary: colorPalette.cyanDark,
//   teritary: colorPalette.amberDark,

//   mono: colorPalette.grayDark,

//   success: colorPalette.greenDark,
//   warning: colorPalette.orangeDark,
//   error: colorPalette.redDark,

//   background: {
//     primary: colorPalette.mauveDark[50],
//     secondary: colorPalette.mauveDark[200],
//     teritary: colorPalette.mauveDark[400],
//     inversePrimary: colorPalette.grayDark[50],
//     inverseSecondary: colorPalette.grayDark[200],
//     inverseTeritary: colorPalette.grayDark[400],
//   },
//   foreground: {
//     primary: colorPalette.white,
//     secondary: colorPalette.mauveDark[1100],
//     teritary: colorPalette.mauveDark[900],
//     inversePrimary: colorPalette.white,
//     inverseSecondary: colorPalette.grayDark[1100],
//     inverseTeritary: colorPalette.grayDark[900],
//   },
// }
const themeColor: StitchesColors = {
  transparent: colorPalette.transparent,
  current: colorPalette.current,
  black: colorPalette.black,
  white: colorPalette.white,

  primary50: colorPalette.purpleDark[50],
  primary100: colorPalette.purpleDark[100],
  primary200: colorPalette.purpleDark[200],
  primary300: colorPalette.purpleDark[300],
  primary400: colorPalette.purpleDark[400],
  primary500: colorPalette.purpleDark[500],
  primary600: colorPalette.purpleDark[600],
  primary700: colorPalette.purpleDark[700],
  primary800: colorPalette.purpleDark[800],
  primary900: colorPalette.purpleDark[900],
  primary1000: colorPalette.purpleDark[1000],
  primary1100: colorPalette.purpleDark[1100],

  secondary50: colorPalette.cyanDark[50],
  secondary100: colorPalette.cyanDark[100],
  secondary200: colorPalette.cyanDark[200],
  secondary300: colorPalette.cyanDark[300],
  secondary400: colorPalette.cyanDark[400],
  secondary500: colorPalette.cyanDark[500],
  secondary600: colorPalette.cyanDark[600],
  secondary700: colorPalette.cyanDark[700],
  secondary800: colorPalette.cyanDark[800],
  secondary900: colorPalette.cyanDark[900],
  secondary1000: colorPalette.cyanDark[1000],
  secondary1100: colorPalette.cyanDark[1100],

  teritary50: colorPalette.crimsonDark[50],
  teritary100: colorPalette.crimsonDark[100],
  teritary200: colorPalette.crimsonDark[200],
  teritary300: colorPalette.crimsonDark[300],
  teritary400: colorPalette.crimsonDark[400],
  teritary500: colorPalette.crimsonDark[500],
  teritary600: colorPalette.crimsonDark[600],
  teritary700: colorPalette.crimsonDark[700],
  teritary800: colorPalette.crimsonDark[800],
  teritary900: colorPalette.crimsonDark[900],
  teritary1000: colorPalette.crimsonDark[1000],
  teritary1100: colorPalette.crimsonDark[1100],

  mono50: colorPalette.grayDark[50],
  mono100: colorPalette.grayDark[100],
  mono200: colorPalette.grayDark[200],
  mono300: colorPalette.grayDark[300],
  mono400: colorPalette.grayDark[400],
  mono500: colorPalette.grayDark[500],
  mono600: colorPalette.grayDark[600],
  mono700: colorPalette.grayDark[700],
  mono800: colorPalette.grayDark[800],
  mono900: colorPalette.grayDark[900],
  mono1000: colorPalette.grayDark[1000],
  mono1100: colorPalette.grayDark[1100],

  success50: colorPalette.greenDark[50],
  success100: colorPalette.greenDark[100],
  success200: colorPalette.greenDark[200],
  success300: colorPalette.greenDark[300],
  success400: colorPalette.greenDark[400],
  success500: colorPalette.greenDark[500],
  success600: colorPalette.greenDark[600],
  success700: colorPalette.greenDark[700],
  success800: colorPalette.greenDark[800],
  success900: colorPalette.greenDark[900],
  success1000: colorPalette.greenDark[1000],
  success1100: colorPalette.greenDark[1100],

  warning50: colorPalette.orangeDark[50],
  warning100: colorPalette.orangeDark[100],
  warning200: colorPalette.orangeDark[200],
  warning300: colorPalette.orangeDark[300],
  warning400: colorPalette.orangeDark[400],
  warning500: colorPalette.orangeDark[500],
  warning600: colorPalette.orangeDark[600],
  warning700: colorPalette.orangeDark[700],
  warning800: colorPalette.orangeDark[800],
  warning900: colorPalette.orangeDark[900],
  warning1000: colorPalette.orangeDark[1000],
  warning1100: colorPalette.orangeDark[1100],

  error50: colorPalette.redDark[50],
  error100: colorPalette.redDark[100],
  error200: colorPalette.redDark[200],
  error300: colorPalette.redDark[300],
  error400: colorPalette.redDark[400],
  error500: colorPalette.redDark[500],
  error600: colorPalette.redDark[600],
  error700: colorPalette.redDark[700],
  error800: colorPalette.redDark[800],
  error900: colorPalette.redDark[900],
  error1000: colorPalette.redDark[1000],
  error1100: colorPalette.redDark[1100],

  background: {
    primary: colorPalette.purpleDark[300],
    secondary: colorPalette.cyanDark[300],
    teritary: colorPalette.amberDark[300],
    inversePrimary: colorPalette.purpleDark[500],
    inverseSecondary: colorPalette.cyanDark[500],
    inverseTeritary: colorPalette.amberDark[500],
  },
  foreground: {
    primary: colorPalette.white,
    secondary: colorPalette.cyanDark[1100],
    teritary: colorPalette.amberDark[1100],
    inversePrimary: colorPalette.purpleDark[900],
    inverseSecondary: colorPalette.cyanDark[900],
    inverseTeritary: colorPalette.amberDark[900],
  },
}

export default themeColor
