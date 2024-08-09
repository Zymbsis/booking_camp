import clsx from 'clsx';

const Button = ({ type = 'button', onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx('button', { [className]: className })}>
      {children}
    </button>
  );
};

export default Button;
