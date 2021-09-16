import { Theme } from '../types'
import mediaQuery from './mediaQuery'
import typography from './typography'
import zIndices from '@src/tokens/zIndices'
import radii from '@src/tokens/radii'

type BaseTheme = Pick<Theme, 'mediaQuery' | 'typography' | 'zIndices' | 'radii'>

export const bsaeTheme: BaseTheme = {
  mediaQuery,
  typography,
  zIndices,
  radii,
}
