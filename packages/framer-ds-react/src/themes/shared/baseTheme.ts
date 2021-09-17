import { Theme } from '../types'
import mediaQuery from './mediaQuery'
import typography from './typography'
import zIndices from '@src/tokens/zIndices'
import radii from '@src/tokens/radii'
import space from '@src/tokens/space'
import sizes from '@src/tokens/sizes'

type BaseTheme = Pick<
  Theme,
  'mediaQuery' | 'typography' | 'zIndices' | 'radii' | 'sizes' | 'space'
>

export const bsaeTheme: BaseTheme = {
  mediaQuery,
  typography,
  zIndices,
  radii,
  space,
  sizes,
}
