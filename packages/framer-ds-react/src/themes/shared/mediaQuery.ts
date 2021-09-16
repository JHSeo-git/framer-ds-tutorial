import breakpoints from '@src/tokens/breakpoints'

const media = (size: number) => `@media screen and (min-width: ${size}px)`

const mediaQuery = {
  sm: media(breakpoints.sm),
  md: media(breakpoints.md),
  lg: media(breakpoints.lg),
  xl: media(breakpoints.xl),
  xxl: media(breakpoints.xxl),
  custom: media,
  motion: '(prefers-reduced-motion)',
  hover: '(any-hover: hover)',
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)',
}
export type MediaQuery = typeof mediaQuery
export default mediaQuery
