import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      primary: '',
      secondary: '',
      tertiary: '',
      fourth: ''
    },

    fonts: {
      nunito: 'Nunito Sans'
    }
  }
})