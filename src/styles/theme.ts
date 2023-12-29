'use client'

const Theme: any = {
  border: {
    small_radius: '0.5rem',
    regular_radius: '0.8rem'
  },
  shadow: {
    box_shadow: '2px 2px 6px rgba(68, 68, 68, 0.2)'
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
    faded_white1: 'rgba(255, 255, 255, 0.8)',
    faded_white2: 'rgba(255, 255, 255, 0.6)',
    faded_white3: 'rgba(255, 255, 255, 0.4)',
    grayish_blue: 'rgb(130, 169, 191)',
    grayish_pink: 'rgb(219,107,154)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '5rem',
    xxlarge: '6rem'
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
