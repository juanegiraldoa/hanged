import { vars } from '@/app.css';
import { style, styleVariants } from '@vanilla-extract/css';
const { primary } = vars.palette;

const buttonBase = style({
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  textTransform: 'capitalize',
  transitionDuration: '.3s',
  fontWeight: 'bolder',
});

export const button = styleVariants({
  primary: [
    buttonBase,
    {
      backgroundColor: primary.main,
      color: primary.contrastText,
      ':hover': { backgroundColor: primary.light },
    },
  ],
});
