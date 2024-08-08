import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({ type = 'button', onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(css.button, { [className]: className })}>
      {children}
    </button>
  );
};

export default Button;
