import css from './Icon.module.css';
import icon from '../../../images/icons.svg';
import clsx from 'clsx';

const Icon = ({ iconId, className, ...props }) => {
  return (
    <svg
      className={clsx(css.icon, { [className]: className })}
      role='img'
      {...props}>
      <use xlinkHref={`${icon}#${iconId}`} />
    </svg>
  );
};

export default Icon;
