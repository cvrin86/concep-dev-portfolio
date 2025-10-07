// renderLinks.js
import { NavLink } from 'react-router-dom';

export const renderLinks = (links = [], onClick = () => {}, className = 'nav-link mx-2') =>
  links.map(({ path, label }) => (
    <li className="nav-item" key={path}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${className} ${isActive ? 'active' : ''}`
        }
        onClick={onClick}
      >
        {label}
      </NavLink>
    </li>
  ));
