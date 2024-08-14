import { NavLink } from 'react-router-dom';
import { Container } from 'shared';
import clsx from 'clsx';
import css from './Header.module.css';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.navLink, { [css.navActive]: isActive });

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.navLinkContainer}>
          <ul className={css.navLinkList}>
            <li className={css.navLinkItem}>
              <NavLink
                className={getNavLinkClass}
                to='/'>
                Home Page
              </NavLink>
            </li>
            <li className={css.navLinkItem}>
              <NavLink
                className={getNavLinkClass}
                to='/catalog'>
                Catalog Page
              </NavLink>
            </li>
            <li className={css.navLinkItem}>
              <NavLink
                className={getNavLinkClass}
                to='/favorites'>
                Favorites Page
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
