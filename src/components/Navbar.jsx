import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/Home">
          <img src="/imageset/logo.webp" className="nav_logo" alt="Logo" />
        </Link>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/Westock" className="nav-items" onClick={() => setMenuOpen(false)}>
              WeSTOCK
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutus" className="nav-items" onClick={() => setMenuOpen(false)}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Team" className="nav-items" onClick={() => setMenuOpen(false)}>
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/Career" className="nav-items" onClick={() => setMenuOpen(false)}>
              Career
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className="nav-items" onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
