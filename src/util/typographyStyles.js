export const typographyStyles = (typographyStyle = 'body') => ({
  typographyStyleProp = typographyStyle,
  weight,
  theme: { typographyStyles }
}) => {
  const styleSpecs = typographyStyles[typographyStyleProp]
  return `
    font-family: ${styleSpecs.family};
    font-size: ${styleSpecs.size}px;
    font-weight: ${
      weight
        ? styleSpecs[weight]
        : 'weight' in styleSpecs
          ? styleSpecs[styleSpecs.weight]
          : styleSpecs['normal']
    };
    line-height: ${styleSpecs.lineHeight * styleSpecs.size}px;
    letter-spacing: ${styleSpecs.letterSpacing}px;
  `
}

export default typographyStyles

/*

const openSansStyle: {
  family: `'Open Sans', sans-serif`,
  normal: 300,
  bold: 700,
  size: 16,
  lineHeight: 1,
  letterSpacing: 0
}

configure your typography styles by providing the following object to your styled-components ThemeProvider:

const typographyStyles = {
  title: openSansStyle,
  headline: { ...openSansStyle, size: 32, weight: 'bold' },
  body: openSansStyle,
  callout: openSansStyle,
  subhead: openSansStyle,
  footnote: { ...openSansStyle, size: 12 },
  caption: openSansStyle
}

usage:

const Headline = styled.h1`
  ${typographyStyles('headline')};
  ${color};
`

override:

<Headline typographyStyle="body" weight="normal">Hello World!</Headline>

*/
