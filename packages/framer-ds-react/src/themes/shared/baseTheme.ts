import { Theme } from '../types'
import mediaQuery from './mediaQuery'
import typography from './typography'
import radii from '@src/tokens/radii'
import shadows from '@src/tokens/shadows'
import sizes from '@src/tokens/sizes'
import space from '@src/tokens/space'
import zIndices from '@src/tokens/zIndices'

type BaseTheme = Pick<
  Theme,
  | 'mediaQuery'
  | 'typography'
  | 'zIndices'
  | 'radii'
  | 'sizes'
  | 'space'
  | 'shadows'
>

export const bsaeTheme: BaseTheme = {
  mediaQuery,
  typography,
  zIndices,
  radii,
  space,
  sizes,
  shadows,
}
