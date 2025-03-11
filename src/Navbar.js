import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/quiz" className="nav-link">Quiz!</Link>
          <Link to="/personality" className="nav-link">Personality Types</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-dropdown">
          <Link to="/quiz" className="nav-link" onClick={() => setMenuOpen(false)}>Quiz!</Link>
          <Link to="/personality" className="nav-link" onClick={() => setMenuOpen(false)}>Personality Types</Link>
          <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
