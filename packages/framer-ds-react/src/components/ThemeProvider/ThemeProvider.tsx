import { themes } from '@src/themes'
import { Theme } from '@src/themes/types'
import React, { useContext } from 'react'

export type ThemeProviderProps = {
  theme: Theme
  children: React.ReactNode
}

const ThemeContext = React.createContext<Theme>(themes.lightTheme)

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
export default ThemeProvider
