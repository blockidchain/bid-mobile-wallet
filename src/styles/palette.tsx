export const palette = {
  primary: '#f70949',
  secondary: '#4db9fe',
  textSecondary: '#4db9fe',
  textBlack: '#000',
  textOrange: '#4250b2',
  textGreen: '#5ad123',
  textRed: '#e01818',
  textWhite: 'rgba(1, 1, 1, 0.74)',
  textWhiteMuted: 'rgba(255, 255, 255, 0.54)',
  textBlackMuted: 'rgba(1, 1, 1, 0.54)',
  buttonColor: '#4250b2',
  lightGrey: 'rgb(237,238,239)',
  grey: 'rgb(158,158,158)',
  gradientPrimaryFirst: '#4250b2',
  gradientPrimarySecond: '#4db9fe',
  gradientSecondaryFirst: '#4db9fe',
  gradientSecondarySecond: '#4250b2',
  background: '#fff',
  backgroundDarker: '#fff',
  headerColor: '#4250b2',
  border: '#4db9fe',
  error: 'rgb(244, 94, 89)',
  shadow: 'rgba(0, 0, 0, 0.12)',
  shadowLight: 'rgba(0, 0, 0, 0.08)',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  searchBar: '#4db9fe',
  modalTransparent: 'rgba(0,0,0,0.5)',
};

export const gradients = {
  Primary: {
    colors: [palette.gradientPrimaryFirst, palette.gradientPrimarySecond],
    start: { x: 1, y: -0.46 },
    end: { x: 1, y: 1.02 },
  },
  Secondary: {
    colors: [palette.gradientSecondaryFirst, palette.gradientSecondarySecond],
    start: { x: 1, y: 0 },
    end: { x: 1, y: 1 },
  },
};
