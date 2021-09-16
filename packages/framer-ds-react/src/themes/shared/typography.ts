import typoPalette from '@src/tokens/typoPalette'

// TODO: 더 좋은 형태로 바꾸어 보자
const typography = {
  textFontFamily: typoPalette.fontFamily.OpenSans,
  digitFontFamily: typoPalette.fontFamily.withSpocaHanSansNeo(
    typoPalette.fontFamily.OpenSans,
  ),
  fontWeights: typoPalette.fontWeights,
  lineHeights: typoPalette.lineHeights,
  letterSpacing: typoPalette.letterSpacing,
  fontSizes: typoPalette.fontSize,
  heading: {
    h1: {
      fontSize: typoPalette.fontSize['4xl'],
      lineHeight: typoPalette.lineHeights.normal,
    },
    h2: {
      fontSize: typoPalette.fontSize['2xl'],
      lineHeight: typoPalette.lineHeights.normal,
    },
    h3: {
      fontSize: typoPalette.fontSize['xl'],
      lineHeight: typoPalette.lineHeights.normal,
    },
    h4: {
      fontSize: typoPalette.fontSize['base'],
      lineHeight: typoPalette.lineHeights.normal,
    },
    h5: {
      fontSize: typoPalette.fontSize['sm'],
      lineHeight: typoPalette.lineHeights.normal,
    },
    h6: {
      fontSize: typoPalette.fontSize['xs'],
      lineHeight: typoPalette.lineHeights.normal,
    },
  },
}

export const generateTypography = ({
  //
  fontFamily = typography.textFontFamily,
}): Typography => {
  return {
    ...typography,
    textFontFamily: fontFamily,
    digitFontFamily: typoPalette.fontFamily.withSpocaHanSansNeo(fontFamily),
  }
}

export type Typography = typeof typography
export default typography
