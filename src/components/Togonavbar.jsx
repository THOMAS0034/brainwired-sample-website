import React, { useState } from 'react';
import './Togonavbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Togonavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <nav className="togo-nav-navbar">
        <div className="togo-nav-container">
          <Link to="/Home">
            <img src="/imageset/togologo-white.avif" className="togo-nav-logo" alt="Logo" />
          </Link>
          <div
            className={`togo-nav-hamburger ${menuOpen ? 'togo-nav-active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`togo-nav-links ${menuOpen ? 'togo-nav-open' : ''}`}>
                <li>
              <NavLink
                to="/Team"
                className="togo-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                Paltoo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Team"
                className="togo-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                Togo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Aboutus"
                className="togo-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Team"
                className="togo-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                Buy Now
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Team"
                className="togo-nav-item"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
