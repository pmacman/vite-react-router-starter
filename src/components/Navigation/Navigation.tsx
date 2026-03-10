import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className={'nav'}>
      <NavLink to='/' className={'nav-link'}>
        Home
      </NavLink>
      <NavLink to='/about' className={'nav-link'}>
        About
      </NavLink>
    </nav>
  );
}

export default Navigation;
