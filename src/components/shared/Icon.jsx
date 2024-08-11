import { icon } from 'icons';
import clsx from 'clsx';

const Icon = ({ iconId, className, ...props }) => {
  return (
    <svg
      className={clsx('icon', { [className]: className })}
      role='img'
      {...props}>
      <use xlinkHref={`${icon}#${iconId}`} />
    </svg>
  );
};

export default Icon;
