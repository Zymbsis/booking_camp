import clsx from 'clsx';

const Button = ({
  type = 'button',
  onClick,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx('button', className)}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
