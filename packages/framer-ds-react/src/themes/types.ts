import { MediaQuery } from './shared/mediaQuery'
import { Typography } from './shared/typography'
import { ZIndices } from '@src/tokens/zIndices'
import { Radii } from '@src/tokens/radii'
import { Space } from '@src/tokens/space'
import { Sizes } from '@src/tokens/sizes'
import { Shadows } from '@src/tokens/shadows'

/**
 * Color Theme 요소 타입 정의
 * ------------------------------------------------------
 */

type SemanticColors = {
  backgroundPrimary: string
  backgroundSecondary: string
  backgroundTeritary: string
  backgroundInversePrimary: string
  backgroundInverseSecondary: string
  backgroundInverseTeritary: string
  foregroundPrimary: string
  foregroundSecondary: string
  foregroundTeritary: string
  foregroundInversePrimary: string
  foregroundInverseSecondary: string
  foregroundInverseTeritary: string
}

type test = 'test' | 'teee'
/**
 * Stitches 용 Color 타입 정의
 * ------------------------------------------------------
 */
// TODO: auto generated color types
type StitchesFoundationColors = {
  // common color
  transparent: string
  current: string
  white: string
  black: string

  primary1: string
  primary2: string
  primary3: string
  primary4: string
  primary5: string
  primary6: string
  primary7: string
  primary8: string
  primary9: string
  primary10: string
  primary11: string
  primary12: string

  primaryA1: string
  primaryA2: string
  primaryA3: string
  primaryA4: string
  primaryA5: string
  primaryA6: string
  primaryA7: string
  primaryA8: string
  primaryA9: string
  primaryA10: string
  primaryA11: string
  primaryA12: string

  secondary1: string
  secondary2: string
  secondary3: string
  secondary4: string
  secondary5: string
  secondary6: string
  secondary7: string
  secondary8: string
  secondary9: string
  secondary10: string
  secondary11: string
  secondary12: string

  secondaryA1: string
  secondaryA2: string
  secondaryA3: string
  secondaryA4: string
  secondaryA5: string
  secondaryA6: string
  secondaryA7: string
  secondaryA8: string
  secondaryA9: string
  secondaryA10: string
  secondaryA11: string
  secondaryA12: string

  teritary1: string
  teritary2: string
  teritary3: string
  teritary4: string
  teritary5: string
  teritary6: string
  teritary7: string
  teritary8: string
  teritary9: string
  teritary10: string
  teritary11: string
  teritary12: string

  teritaryA1: string
  teritaryA2: string
  teritaryA3: string
  teritaryA4: string
  teritaryA5: string
  teritaryA6: string
  teritaryA7: string
  teritaryA8: string
  teritaryA9: string
  teritaryA10: string
  teritaryA11: string
  teritaryA12: string

  mono1: string
  mono2: string
  mono3: string
  mono4: string
  mono5: string
  mono6: string
  mono7: string
  mono8: string
  mono9: string
  mono10: string
  mono11: string
  mono12: string

  monoA1: string
  monoA2: string
  monoA3: string
  monoA4: string
  monoA5: string
  monoA6: string
  monoA7: string
  monoA8: string
  monoA9: string
  monoA10: string
  monoA11: string
  monoA12: string

  success1: string
  success2: string
  success3: string
  success4: string
  success5: string
  success6: string
  success7: string
  success8: string
  success9: string
  success10: string
  success11: string
  success12: string

  successA1: string
  successA2: string
  successA3: string
  successA4: string
  successA5: string
  successA6: string
  successA7: string
  successA8: string
  successA9: string
  successA10: string
  successA11: string
  successA12: string

  warning1: string
  warning2: string
  warning3: string
  warning4: string
  warning5: string
  warning6: string
  warning7: string
  warning8: string
  warning9: string
  warning10: string
  warning11: string
  warning12: string

  warningA1: string
  warningA2: string
  warningA3: string
  warningA4: string
  warningA5: string
  warningA6: string
  warningA7: string
  warningA8: string
  warningA9: string
  warningA10: string
  warningA11: string
  warningA12: string

  error1: string
  error2: string
  error3: string
  error4: string
  error5: string
  error6: string
  error7: string
  error8: string
  error9: string
  error10: string
  error11: string
  error12: string

  errorA1: string
  errorA2: string
  errorA3: string
  errorA4: string
  errorA5: string
  errorA6: string
  errorA7: string
  errorA8: string
  errorA9: string
  errorA10: string
  errorA11: string
  errorA12: string
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
  shadows: Shadows
}
