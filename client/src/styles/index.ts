import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>

const BASE = {
  flexCol: 16,
  flexMaxWidth: 100,
  flexColGutters: 2
}

export type ScTypes<T> = T & { theme: ITheme }

export type ITheme = {
  base: {
    size: number
    viewport: {
      phone: number
      desktop: number
      largeDesktop: number
    }
    maxWidth: string
    fontFamily: string
    fontSize: string
    lineHeight: number
  }
  font: {
    size: string
  }
  grad: {
    primary: string[]
  }
  flex: {
    col: number
    maxWidth: number
    gutters: number
    colWidth: number
    colWidthGutters: number
  }
}

export const theme = {
  base: {
    size: 8,
    viewport: {
      phone: 768,
      desktop: 769,
      largeDesktop: 1020
    },
    maxWidth: '1200px',
    fontFamily: '"Yu Gothic", "Hiragino Kaku Gothic ProN", Meiryo, Arial, sans-serif',
    fontSize: '62.5%',
    lineHeight: 1.6
  },
  font: {
    size: '1.4rem'
  },
  grad: {
    primary: ['#319ADB', '#5FE6F0'],
    caution: ['#F5576C', '#FA709A']
  },
  flex: {
    col: BASE.flexCol,
    maxWidth: BASE.flexMaxWidth,
    gutters: BASE.flexColGutters,
    colWidth: BASE.flexMaxWidth / BASE.flexCol,
    colWidthGutters: (BASE.flexMaxWidth + BASE.flexColGutters) / BASE.flexCol
  }
}

export default styled
export { css, keyframes, ThemeProvider }
