import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import css from './FilterBar.module.css';

const FilterBar = () => {
  const { pathname } = useLocation();

  return (
    <aside
      className={clsx(css.filterBar, {
        [css.homePageFilterBar]: pathname === '/',
      })}></aside>
  );
};

export default FilterBar;
