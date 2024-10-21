import { button } from './button.css';

export default function Button({ children, className = '', ...rest }) {
  return (
    <button className={[className, button['primary']].join(' ').trim()} {...rest}>
      {children}
    </button>
  );
}
