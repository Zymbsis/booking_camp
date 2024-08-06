import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div>
      <NavLink to='/'>Home Page</NavLink>
      <NavLink to='/favorites'>Favorites Page</NavLink>
      <NavLink to='/catalog'>Catalog Page</NavLink>
    </div>
  );
};

export default SideBar;
