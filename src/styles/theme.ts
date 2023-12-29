'use client'

const Theme: any = {
  border: {
    radius: '0.5rem'
  },
  font: {
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmal: '01.2rem',
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '2rem',
      large: '3rem',
      xlarge: '4rem',
      xxlarge: '5.5rem',
      huge: '6rem'
    }
  },
  colors: {
    white: 'rgb(255, 255, 255)',
    faded_white: 'rgba(255, 255, 255, 0.6)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.2s ease'
  }
}

export default Theme
