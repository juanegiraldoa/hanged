import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css';

const colors = {
  black: '#000',
  white: '#fff',
  ligthGrey: '#D3D3D3',
  darkGrey: '#A9A9A9',
  whiteBone: '#F8F8F0',
};

export const vars = createGlobalTheme(':root', {
  palette: {
    primary: {
      main: colors.darkGrey,
      light: colors.ligthGrey,
      dark: colors.black,
      contrastText: colors.black,
    },
  },
});

globalStyle('*', { margin: '0px', padding: '0px' });
globalStyle('*, *::before, *::after', { boxSizing: 'border-box' });
globalStyle('input, button, textarea, select', { font: 'inherit' });
globalStyle('p', { textWrap: 'pretty' });
globalStyle('h1, h2, h3, h4, h5, h6', { textWrap: 'balance' });
globalStyle('img, video, svg', { height: 'auto', maxWidth: '100%' });

globalStyle('body, html', {
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
});

export const main = style({
  margin: '100px auto',
  width: '50%',
});

export const wordContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '10px',
});

export const errorContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const letterContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '10px',
});

export const letterButton = style({
  width: '40px',
  height: '40px',
  margin: '5px',
  ':disabled': {
    color: '#f91111',
    cursor: 'default',
  },
});

export const buttonNext = style({ width: '100%' });
