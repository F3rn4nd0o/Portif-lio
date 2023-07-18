import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$primary',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Nunito Sans' || 'Roboto',
  },

  a: {
    textDecoration: 'none',
    color: '$white',
  }
})