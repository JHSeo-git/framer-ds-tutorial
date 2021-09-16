import { bsaeTheme } from '../shared/baseTheme'
import { Theme } from '../types'
import themeColor from './themeColors'

const darkTheme: Theme = {
  colors: themeColor,
  ...bsaeTheme,
}

export default darkTheme
