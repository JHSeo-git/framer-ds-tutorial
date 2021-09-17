/**
 * @see https://github.com/radix-ui/design-system/blob/master/stitches.config.ts
 */

import { themes } from '@src/themes'
import { createStitches, PropertyValue } from '@stitches/react'

// base theme(lightTheme)
// TODO: auto generate primary, secondary, ...
const {
  styled,
  theme: lightTheme,
  createTheme,
} = createStitches({
  media: {
    sm: themes.lightTheme.mediaQuery.sm,
    md: themes.lightTheme.mediaQuery.md,
    lg: themes.lightTheme.mediaQuery.lg,
    xl: themes.lightTheme.mediaQuery.xl,
    xxl: themes.lightTheme.mediaQuery.xxl,
    motion: themes.lightTheme.mediaQuery.motion,
    hover: themes.lightTheme.mediaQuery.hover,
    dark: themes.lightTheme.mediaQuery.dark,
    light: themes.lightTheme.mediaQuery.light,
  },
  theme: {
    colors: {
      transparent: themes.lightTheme.colors.transparent,
      current: themes.lightTheme.colors.current,
      white: themes.lightTheme.colors.white,
      black: themes.lightTheme.colors.black,

      primary50: themes.lightTheme.colors.primary50,
      primary100: themes.lightTheme.colors.primary100,
      primary200: themes.lightTheme.colors.primary200,
      primary300: themes.lightTheme.colors.primary300,
      primary400: themes.lightTheme.colors.primary400,
      primary500: themes.lightTheme.colors.primary500,
      primary600: themes.lightTheme.colors.primary600,
      primary700: themes.lightTheme.colors.primary700,
      primary800: themes.lightTheme.colors.primary800,
      primary900: themes.lightTheme.colors.primary900,
      primary1000: themes.lightTheme.colors.primary1000,
      primary1100: themes.lightTheme.colors.primary1100,

      secondary50: themes.lightTheme.colors.secondary50,
      secondary100: themes.lightTheme.colors.secondary100,
      secondary200: themes.lightTheme.colors.secondary200,
      secondary300: themes.lightTheme.colors.secondary300,
      secondary400: themes.lightTheme.colors.secondary400,
      secondary500: themes.lightTheme.colors.secondary500,
      secondary600: themes.lightTheme.colors.secondary600,
      secondary700: themes.lightTheme.colors.secondary700,
      secondary800: themes.lightTheme.colors.secondary800,
      secondary900: themes.lightTheme.colors.secondary900,
      secondary1000: themes.lightTheme.colors.secondary1000,
      secondary1100: themes.lightTheme.colors.secondary1100,

      teritary50: themes.lightTheme.colors.teritary50,
      teritary100: themes.lightTheme.colors.teritary100,
      teritary200: themes.lightTheme.colors.teritary200,
      teritary300: themes.lightTheme.colors.teritary300,
      teritary400: themes.lightTheme.colors.teritary400,
      teritary500: themes.lightTheme.colors.teritary500,
      teritary600: themes.lightTheme.colors.teritary600,
      teritary700: themes.lightTheme.colors.teritary700,
      teritary800: themes.lightTheme.colors.teritary800,
      teritary900: themes.lightTheme.colors.teritary900,
      teritary1000: themes.lightTheme.colors.teritary1000,
      teritary1100: themes.lightTheme.colors.teritary1100,

      success50: themes.lightTheme.colors.success50,
      success100: themes.lightTheme.colors.success100,
      success200: themes.lightTheme.colors.success200,
      success300: themes.lightTheme.colors.success300,
      success400: themes.lightTheme.colors.success400,
      success500: themes.lightTheme.colors.success500,
      success600: themes.lightTheme.colors.success600,
      success700: themes.lightTheme.colors.success700,
      success800: themes.lightTheme.colors.success800,
      success900: themes.lightTheme.colors.success900,
      success1000: themes.lightTheme.colors.success1000,
      success1100: themes.lightTheme.colors.success1100,

      warning50: themes.lightTheme.colors.warning50,
      warning100: themes.lightTheme.colors.warning100,
      warning200: themes.lightTheme.colors.warning200,
      warning300: themes.lightTheme.colors.warning300,
      warning400: themes.lightTheme.colors.warning400,
      warning500: themes.lightTheme.colors.warning500,
      warning600: themes.lightTheme.colors.warning600,
      warning700: themes.lightTheme.colors.warning700,
      warning800: themes.lightTheme.colors.warning800,
      warning900: themes.lightTheme.colors.warning900,
      warning1000: themes.lightTheme.colors.warning1000,
      warning1100: themes.lightTheme.colors.warning1100,

      error50: themes.lightTheme.colors.error50,
      error100: themes.lightTheme.colors.error100,
      error200: themes.lightTheme.colors.error200,
      error300: themes.lightTheme.colors.error300,
      error400: themes.lightTheme.colors.error400,
      error500: themes.lightTheme.colors.error500,
      error600: themes.lightTheme.colors.error600,
      error700: themes.lightTheme.colors.error700,
      error800: themes.lightTheme.colors.error800,
      error900: themes.lightTheme.colors.error900,
      error1000: themes.lightTheme.colors.error1000,
      error1100: themes.lightTheme.colors.error1100,

      mono50: themes.lightTheme.colors.mono50,
      mono100: themes.lightTheme.colors.mono100,
      mono200: themes.lightTheme.colors.mono200,
      mono300: themes.lightTheme.colors.mono300,
      mono400: themes.lightTheme.colors.mono400,
      mono500: themes.lightTheme.colors.mono500,
      mono600: themes.lightTheme.colors.mono600,
      mono700: themes.lightTheme.colors.mono700,
      mono800: themes.lightTheme.colors.mono800,
      mono900: themes.lightTheme.colors.mono900,
      mono1000: themes.lightTheme.colors.mono1000,
      mono1100: themes.lightTheme.colors.mono1100,

      bgPrimary: themes.lightTheme.colors.background.primary,
      bgSecondary: themes.lightTheme.colors.background.secondary,
      bgTeritary: themes.lightTheme.colors.background.teritary,

      bgInversePrimary: themes.lightTheme.colors.background.inversePrimary,
      bgInverseSecondary: themes.lightTheme.colors.background.inverseSecondary,
      bgInverseTeritary: themes.lightTheme.colors.background.inverseTeritary,

      fgPrimary: themes.lightTheme.colors.foreground.primary,
      fgSecondary: themes.lightTheme.colors.foreground.secondary,
      fgTeritary: themes.lightTheme.colors.foreground.teritary,

      fgInversePrimary: themes.lightTheme.colors.foreground.inversePrimary,
      fgInverseSecondary: themes.lightTheme.colors.foreground.inverseSecondary,
      fgInverseTeritary: themes.lightTheme.colors.foreground.inverseTeritary,
    },
    fonts: {
      text: themes.lightTheme.typography.textFontFamily,
      digit: themes.lightTheme.typography.digitFontFamily,
    },
    fontWeights: themes.lightTheme.typography.fontWeights,
    fontSizes: {
      ...themes.lightTheme.typography.fontSizes,
      h1: themes.lightTheme.typography.heading.h1.fontSize,
      h2: themes.lightTheme.typography.heading.h2.fontSize,
      h3: themes.lightTheme.typography.heading.h3.fontSize,
      h4: themes.lightTheme.typography.heading.h4.fontSize,
      h5: themes.lightTheme.typography.heading.h5.fontSize,
      h6: themes.lightTheme.typography.heading.h6.fontSize,
    },
    lineHeights: themes.lightTheme.typography.lineHeights,
    letterSpacings: themes.lightTheme.typography.letterSpacing,
    radii: themes.lightTheme.radii,
    zIndices: themes.lightTheme.zIndices,
    sizes: themes.lightTheme.sizes,
    space: themes.lightTheme.space,
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    ox: (value: PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
})

const darkTheme = createTheme({
  colors: {
    transparent: themes.darkTheme.colors.transparent,
    current: themes.darkTheme.colors.current,
    white: themes.darkTheme.colors.white,
    black: themes.darkTheme.colors.black,

    primary50: themes.darkTheme.colors.primary50,
    primary100: themes.darkTheme.colors.primary100,
    primary200: themes.darkTheme.colors.primary200,
    primary300: themes.darkTheme.colors.primary300,
    primary400: themes.darkTheme.colors.primary400,
    primary500: themes.darkTheme.colors.primary500,
    primary600: themes.darkTheme.colors.primary600,
    primary700: themes.darkTheme.colors.primary700,
    primary800: themes.darkTheme.colors.primary800,
    primary900: themes.darkTheme.colors.primary900,
    primary1000: themes.darkTheme.colors.primary1000,
    primary1100: themes.darkTheme.colors.primary1100,

    secondary50: themes.darkTheme.colors.secondary50,
    secondary100: themes.darkTheme.colors.secondary100,
    secondary200: themes.darkTheme.colors.secondary200,
    secondary300: themes.darkTheme.colors.secondary300,
    secondary400: themes.darkTheme.colors.secondary400,
    secondary500: themes.darkTheme.colors.secondary500,
    secondary600: themes.darkTheme.colors.secondary600,
    secondary700: themes.darkTheme.colors.secondary700,
    secondary800: themes.darkTheme.colors.secondary800,
    secondary900: themes.darkTheme.colors.secondary900,
    secondary1000: themes.darkTheme.colors.secondary1000,
    secondary1100: themes.darkTheme.colors.secondary1100,

    teritary50: themes.darkTheme.colors.teritary50,
    teritary100: themes.darkTheme.colors.teritary100,
    teritary200: themes.darkTheme.colors.teritary200,
    teritary300: themes.darkTheme.colors.teritary300,
    teritary400: themes.darkTheme.colors.teritary400,
    teritary500: themes.darkTheme.colors.teritary500,
    teritary600: themes.darkTheme.colors.teritary600,
    teritary700: themes.darkTheme.colors.teritary700,
    teritary800: themes.darkTheme.colors.teritary800,
    teritary900: themes.darkTheme.colors.teritary900,
    teritary1000: themes.darkTheme.colors.teritary1000,
    teritary1100: themes.darkTheme.colors.teritary1100,

    success50: themes.darkTheme.colors.success50,
    success100: themes.darkTheme.colors.success100,
    success200: themes.darkTheme.colors.success200,
    success300: themes.darkTheme.colors.success300,
    success400: themes.darkTheme.colors.success400,
    success500: themes.darkTheme.colors.success500,
    success600: themes.darkTheme.colors.success600,
    success700: themes.darkTheme.colors.success700,
    success800: themes.darkTheme.colors.success800,
    success900: themes.darkTheme.colors.success900,
    success1000: themes.darkTheme.colors.success1000,
    success1100: themes.darkTheme.colors.success1100,

    warning50: themes.darkTheme.colors.warning50,
    warning100: themes.darkTheme.colors.warning100,
    warning200: themes.darkTheme.colors.warning200,
    warning300: themes.darkTheme.colors.warning300,
    warning400: themes.darkTheme.colors.warning400,
    warning500: themes.darkTheme.colors.warning500,
    warning600: themes.darkTheme.colors.warning600,
    warning700: themes.darkTheme.colors.warning700,
    warning800: themes.darkTheme.colors.warning800,
    warning900: themes.darkTheme.colors.warning900,
    warning1000: themes.darkTheme.colors.warning1000,
    warning1100: themes.darkTheme.colors.warning1100,

    error50: themes.darkTheme.colors.error50,
    error100: themes.darkTheme.colors.error100,
    error200: themes.darkTheme.colors.error200,
    error300: themes.darkTheme.colors.error300,
    error400: themes.darkTheme.colors.error400,
    error500: themes.darkTheme.colors.error500,
    error600: themes.darkTheme.colors.error600,
    error700: themes.darkTheme.colors.error700,
    error800: themes.darkTheme.colors.error800,
    error900: themes.darkTheme.colors.error900,
    error1000: themes.darkTheme.colors.error1000,
    error1100: themes.darkTheme.colors.error1100,

    mono50: themes.darkTheme.colors.mono50,
    mono100: themes.darkTheme.colors.mono100,
    mono200: themes.darkTheme.colors.mono200,
    mono300: themes.darkTheme.colors.mono300,
    mono400: themes.darkTheme.colors.mono400,
    mono500: themes.darkTheme.colors.mono500,
    mono600: themes.darkTheme.colors.mono600,
    mono700: themes.darkTheme.colors.mono700,
    mono800: themes.darkTheme.colors.mono800,
    mono900: themes.darkTheme.colors.mono900,
    mono1000: themes.darkTheme.colors.mono1000,
    mono1100: themes.darkTheme.colors.mono1100,

    bgPrimary: themes.darkTheme.colors.background.primary,
    bgSecondary: themes.darkTheme.colors.background.secondary,
    bgTeritary: themes.darkTheme.colors.background.teritary,

    bgInversePrimary: themes.darkTheme.colors.background.inversePrimary,
    bgInverseSecondary: themes.darkTheme.colors.background.inverseSecondary,
    bgInverseTeritary: themes.darkTheme.colors.background.inverseTeritary,

    fgPrimary: themes.darkTheme.colors.foreground.primary,
    fgSecondary: themes.darkTheme.colors.foreground.secondary,
    fgTeritary: themes.darkTheme.colors.foreground.teritary,

    fgInversePrimary: themes.darkTheme.colors.foreground.inversePrimary,
    fgInverseSecondary: themes.darkTheme.colors.foreground.inverseSecondary,
    fgInverseTeritary: themes.darkTheme.colors.foreground.inverseTeritary,
  },
})

export const darkThemeClassName = darkTheme.className
export { styled, lightTheme, darkTheme }
