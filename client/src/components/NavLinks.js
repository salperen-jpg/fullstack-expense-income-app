import React from 'react';
import { links } from '../utils/links';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const NavLinks = ({ toggle }) => {
  const location = useLocation();

  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { id, path, icon, text } = link;
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              isActive && location.pathname === path
                ? 'active nav-link'
                : 'nav-link'
            }
            onClick={toggle}
          >
            {icon}
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
