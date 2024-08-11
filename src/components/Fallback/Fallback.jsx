import clsx from 'clsx';
import css from './Fallback.module.css';
import { useLocation } from 'react-router-dom';

const Fallback = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={clsx(css.wrapper, {
        [css.homePageWrapper]: pathname === '/',
      })}>
      <span className={css.loader}></span>
    </div>
  );
};

export default Fallback;
