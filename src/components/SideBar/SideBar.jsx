import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to='/'>Home Page</NavLink>
      <NavLink to='/favorites'>Favorites Page</NavLink>
      <NavLink to='/catalog'>Catalog Page</NavLink>
    </header>
  );
};

export default Header;
