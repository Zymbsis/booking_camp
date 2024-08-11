import { useLocation } from 'react-router-dom';
import css from './FilterBar.module.css';
import clsx from 'clsx';

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
