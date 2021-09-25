/**
 * @see https://www.radix-ui.com/colors
 */
import {
  amber,
  amberA,
  amberDark,
  amberDarkA,
  crimson,
  crimsonA,
  crimsonDark,
  crimsonDarkA,
  cyan,
  cyanA,
  cyanDark,
  cyanDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  mauve,
  mauveA,
  mauveDark,
  mauveDarkA,
  orange,
  orangeA,
  orangeDark,
  orangeDarkA,
  purple,
  purpleA,
  purpleDark,
  purpleDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
} from '@radix-ui/colors'

const colorPalette = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',

  slate,
  slateA,
  slateDark,
  slateDarkA,

  mauve,
  mauveDark,
  mauveA,
  mauveDarkA,

  gray,
  grayDark,
  grayA,
  grayDarkA,

  amber,
  amberDark,
  amberA,
  amberDarkA,

  cyan,
  cyanDark,
  cyanA,
  cyanDarkA,

  green,
  greenDark,
  greenA,
  greenDarkA,

  orange,
  orangeDark,
  orangeA,
  orangeDarkA,

  red,
  redDark,
  redA,
  redDarkA,

  purple,
  purpleDark,
  purpleA,
  purpleDarkA,

  crimson,
  crimsonDark,
  crimsonA,
  crimsonDarkA,
}

export type ColorPalette = typeof colorPalette
export default colorPalette
