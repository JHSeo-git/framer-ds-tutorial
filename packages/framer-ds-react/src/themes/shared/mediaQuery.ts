import breakpoints from '@src/tokens/breakpoints'

const media = (size: number) => `@media screen and (min-width: ${size}px)`

const mediaQuery = {
  sm: media(breakpoints.sm),
  md: media(breakpoints.md),
  lg: media(breakpoints.lg),
  xl: media(breakpoints.xl),
  xxl: media(breakpoints.xxl),
  custom: media,
}
export type MediaQuery = typeof mediaQuery
export default mediaQuery
