import { NavLink } from 'react-router-dom';
import { Container } from 'shared';
import clsx from 'clsx';
import css from './Header.module.css';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const Header = () => {
  return (
    <header className={css.header}>
      <Container className={css.headerContainer}>
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
      </Container>
    </header>
  );
};

export default Header;
