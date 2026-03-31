import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <span className="brand-orb">
            <span className="material-icons" style={{ fontSize: 16 }}>school</span>
          </span>
          E-Learning
        </NavLink>

        <div className="navbar__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            <span className="material-icons" style={{ fontSize: 16 }}>home</span>
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            <span className="material-icons" style={{ fontSize: 16 }}>menu_book</span>
            Courses
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
