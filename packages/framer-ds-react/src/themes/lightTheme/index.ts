import { bsaeTheme } from '../shared/baseTheme'
import { Theme } from '../types'
import themeColor from './themeColors'

const lightTheme: Theme = {
  colors: themeColor,
  ...bsaeTheme,
}

export default lightTheme
