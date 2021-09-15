import { PaletteElement } from '@src/tokens/palette'
import { MediaQuery } from './shared/mediaQuery'

type FoundationColors = {
  // common
  transparent: string
  current: string
  white: string
  black: string

  // primary
  primary: PaletteElement

  // secondary
  secondary: PaletteElement

  // monoScale
  mono: PaletteElement
}
type SemanticColors = {}
type Colors = FoundationColors

export type Theme = {
  mediaQuery: MediaQuery
  colors: Colors
  typography: {}
  zIndices: {}
}
