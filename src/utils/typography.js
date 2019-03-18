import Typography from 'typography'
import _ from 'lodash'
import siteTheme from 'typography-theme-kirkham'

let fontTheme = _.clone(siteTheme.googleFonts)
fontTheme.push({ name: 'Open Sans', styles: [ '700' ]})

siteTheme.googleFonts = fontTheme
siteTheme.headerFontFamily = ['Fira Sans', 'serif']

const typography = new Typography(siteTheme)
/*
siteTheme.headerFontFamily = ['Fira Sans']
siteTheme.bodyFontFamily = ['Fira Sans', 'sans-serif']

const typography = new Typography({
  title: 'Github',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Fira Sans'],
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  scaleRatio: 2,
  bodyColor: 'hsla(0,0%,0%,0.6)',
  headerWeight: 600,
  bodyWeight: 'normal',
  boldWeight: 600,
  // Github has all block elements use 1/2 rhythm not a full rhythm.
  blockMarginBottom: 1 / 2,
  overrideStyles: ({ rhythm }) => ({
    h1: {
      borderBottom: `1px solid ${gray(93)}`,
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(3 / 4),
      marginTop: rhythm(1.5),
    },
    h2: {
      borderBottom: `1px solid ${gray(93)}`,
      paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
      marginBottom: rhythm(1 / 4),
      marginTop: rhythm(1),
    },
    h6: {
      color: gray(47),
    },
    'h3,h4,h5,h6': {
      marginBottom: rhythm(1 / 2),
      marginTop: rhythm(1),
    },
    'ol,ul': {
      marginLeft: rhythm(1.25),
    },
    // children ol, ul
    'li>ol,li>ul': {
      marginLeft: rhythm(1.25),
    },
    a: {
      color: '#4078c0',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      textDecoration: 'underline',
    },
    blockquote: {
      borderLeft: `4px solid ${gray(87)}`,
      color: gray(47),
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: `calc(${rhythm(1 / 2)} - 1px)`,
    },
  }),
})
*/
export default typography
