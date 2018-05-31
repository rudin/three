const ColorPalette = {
  aqua: {
    base: '#bee6e6'
  },
  black: {
    base: '#000000'
  },
  blue: {
    lighter: '#009de0',
    light: '#0090ce',
    base: '#0055a0'
  },
  green: {
    light: '#78be20',
    base: '#629c19'
  },
  grey: {
    dark: '#404040',
    base: '#737373',
    medium: '#a6a6a6',
    light: '#d9d9d9',
    lighter: '#f6f6f6'
  },
  orange: {
    base: '#F5A623'
  },
  purple: {
    base: '#aa3787'
  },
  red: {
    base: '#d40012'
  },
  white: {
    base: '#ffffff'
  },
  yellow: {
    base: '#ffdc00'
  }
}

export const colors = {
  primary1Color: ColorPalette.green.light,
  primary1HoverColor: ColorPalette.green.base,
  primary2Color: ColorPalette.blue.light,
  primary2HoverColor: ColorPalette.blue.base,
  primary3Color: ColorPalette.grey.base,
  primary3HoverColor: ColorPalette.grey.medium,
  accent1Color: ColorPalette.blue.light,
  accent2Color: ColorPalette.grey.lighter,
  accent3Color: ColorPalette.grey.lighter,
  textColor: ColorPalette.grey.base,
  secondaryTextColor: ColorPalette.blue.base,
  alternateTextColor: ColorPalette.blue.light,
  canvasColor: ColorPalette.white.base,
  borderColor: ColorPalette.grey.light,
  disabledColor: ColorPalette.grey.light,
  shadowColor: ColorPalette.black.base
}

export const breakpoints = [32, 48, 64, 80].map(n => n + 'em')

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

const fontCollection = {
  Rubik: {
    family: `'Rubik', sans-serif`,
    normal: 400,
    bold: 700,
    size: fontSizes[2],
    lineHeight: 1,
    letterSpacing: 0
  },
  times: {
    family: `'Times New Roman'`,
    normal: 300,
    bold: 700,
    size: fontSizes[3],
    lineHeight: 2,
    letterSpacing: 0
  },
  openSans: {
    family: `'Open Sans', sans-serif`,
    normal: 300,
    bold: 700,
    size: fontSizes[2],
    lineHeight: 1,
    letterSpacing: 0
  },
  system: {
    family: `'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
    normal: 300,
    bold: 700,
    size: fontSizes[2],
    lineHeight: 1.4,
    letterSpacing: 0
  }
}

export const typographyStyles = {
  title: fontCollection.system,
  headline: { ...fontCollection.Rubik, size: fontSizes[5], weight: 'bold' },
  body: fontCollection.Rubik,
  callout: fontCollection.system,
  subhead: fontCollection.system,
  footnote: fontCollection.system,
  caption: fontCollection.times
}

export const radii = [0, 2, 4]

export const fontWeights = {
  normal: 300,
  bold: 500
}

export const shadows = ['none', '0 10px 30px 0 rgba(0,0,0,.07)']

export default {
  breakpoints,
  space,
  typographyStyles,
  fontSizes,
  fontWeights,
  colors,
  radii,
  shadows
}
