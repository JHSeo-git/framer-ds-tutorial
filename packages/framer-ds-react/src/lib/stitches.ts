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
  getCssText,
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
      hiContrast: themes.lightTheme.colors.mono12,
      loContrast: themes.lightTheme.colors.white,

      canvas: 'hsl(0 0% 93%)',
      panel: themes.lightTheme.colors.white,
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',

      ...themes.lightTheme.colors,
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
    hiContrast: themes.darkTheme.colors.mono12,
    loContrast: themes.darkTheme.colors.mono3,

    canvas: 'hsl(0 0% 15%)',
    panel: themes.darkTheme.colors.mono5,
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',

    ...themes.darkTheme.colors,
  },
})

export const darkThemeClassName = darkTheme.className
export { styled, getCssText, lightTheme, darkTheme }
