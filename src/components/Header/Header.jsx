import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Container from '../shared/Container';
import clsx from 'clsx';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.navLinkContainer}>
        <NavLink
          className={getNavLinkClass}
          to='/'>
          Home Page
        </NavLink>
        <NavLink
          className={getNavLinkClass}
          to='/catalog'>
          Catalog Page
        </NavLink>
        <NavLink
          className={getNavLinkClass}
          to='/favorites'>
          Favorites Page
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
