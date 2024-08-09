import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Container from '../shared/Container/Container';

const Header = () => {
  return (
    <header className={css.header}>
      <Container className={css.headerContainer}>
        <NavLink
          className={css.navLink}
          to='/'>
          Home Page
        </NavLink>
        <NavLink
          className={css.navLink}
          to='/catalog'>
          Catalog Page
        </NavLink>
        <NavLink
          className={css.navLink}
          to='/favorites'>
          Favorites Page
        </NavLink>
      </Container>
    </header>
  );
};

export default Header;
