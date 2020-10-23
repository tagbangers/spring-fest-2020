const SPACE_UNIT = 8
const spacing = (...args: number[]): string => {
  const unit = (v: number) => v * SPACE_UNIT
  switch (args.length) {
    case 1:
      return `${unit(args[0])}px`
    case 2:
      return [0, 1].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    case 3:
      return [0, 1, 2].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    case 4:
      return [0, 1, 2, 3].map(n => `${args[n] * SPACE_UNIT}px`).join(' ')
    default:
      return 'auto auto'
  }
}

const theme = {
  colors: {
    primary: {
      main: '#24304A',
      darker: '#131F3A',
    },
    brand: '#6CB33F',
    white: '#fff',
    black: '#2D2D2D',
  },
  font: {
    size: {
      base: '106.3%', // 17px
      x3l: '3.052em',
      x2l: '2.441em',
      xl: '1.953em',
      lg: '1.563em',
      md: '1.25em',
      rg: '1em',
      sm: '0.8em',
      xs: '0.64em',
    },
    family: {
      base: "'Noto Sans JP', sans-serif",
      mono: "'Fira Mono', monospace",
    },
  },
  elevation: {
    modal: 10,
  },
  spacing,
  screen: {
    md: '@media screen and (min-width: 768px)',
    lg: '@media screen and (min-width: 1024px)',
    xl: '@media screen and (min-width: 1440px)',
  },
}

type ITheme = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends ITheme {}
}

export default theme
