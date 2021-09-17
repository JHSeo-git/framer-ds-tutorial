import { ColorPaletteElement } from '@src/tokens/colorPalette'
import { MediaQuery } from './shared/mediaQuery'
import { Typography } from './shared/typography'
import { ZIndices } from '@src/tokens/zIndices'
import { Radii } from '@src/tokens/radii'
import { Space } from '@src/tokens/space'
import { Sizes } from '@src/tokens/sizes'

/**
 * Color Theme 요소 타입 정의
 * ------------------------------------------------------
 */

type SemanticColorElement = {
  primary: string
  secondary: string
  teritary: string
  inversePrimary: string
  inverseSecondary: string
  inverseTeritary: string
}

type FoundationColors = {
  // common color
  transparent: string
  current: string
  white: string
  black: string

  // highlight color
  primary: ColorPaletteElement
  secondary: ColorPaletteElement
  teritary: ColorPaletteElement

  // content color
  success: ColorPaletteElement
  warning: ColorPaletteElement
  error: ColorPaletteElement

  // mono color
  mono: ColorPaletteElement
}

type SemanticColors = {
  background: SemanticColorElement
  foreground: SemanticColorElement
}

export type Colors = FoundationColors & SemanticColors

type StitchesFoundationColors = {
  // common color
  transparent: string
  current: string
  white: string
  black: string

  // highlight color
  primary50: string
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary600: string
  primary700: string
  primary800: string
  primary900: string
  primary1000: string
  primary1100: string

  secondary50: string
  secondary100: string
  secondary200: string
  secondary300: string
  secondary400: string
  secondary500: string
  secondary600: string
  secondary700: string
  secondary800: string
  secondary900: string
  secondary1000: string
  secondary1100: string

  teritary50: string
  teritary100: string
  teritary200: string
  teritary300: string
  teritary400: string
  teritary500: string
  teritary600: string
  teritary700: string
  teritary800: string
  teritary900: string
  teritary1000: string
  teritary1100: string

  // content color
  success50: string
  success100: string
  success200: string
  success300: string
  success400: string
  success500: string
  success600: string
  success700: string
  success800: string
  success900: string
  success1000: string
  success1100: string

  warning50: string
  warning100: string
  warning200: string
  warning300: string
  warning400: string
  warning500: string
  warning600: string
  warning700: string
  warning800: string
  warning900: string
  warning1000: string
  warning1100: string

  error50: string
  error100: string
  error200: string
  error300: string
  error400: string
  error500: string
  error600: string
  error700: string
  error800: string
  error900: string
  error1000: string
  error1100: string

  // mono color
  mono50: string
  mono100: string
  mono200: string
  mono300: string
  mono400: string
  mono500: string
  mono600: string
  mono700: string
  mono800: string
  mono900: string
  mono1000: string
  mono1100: string
}

export type StitchesColors = StitchesFoundationColors & SemanticColors

/**
 * Theme 타입 정의
 * ------------------------------------------------------
 */
export type Theme = {
  colors: StitchesColors
  mediaQuery: MediaQuery
  typography: Typography
  zIndices: ZIndices
  radii: Radii
  space: Space
  sizes: Sizes
}
