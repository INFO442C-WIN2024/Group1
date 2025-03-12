import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-container"  style={{ fontFamily: 'rl-aqva, sans-serif' }}>
      <Link to="/quiz" className="nav-link">Quiz!</Link>
      <Link to="/personality" className="nav-link">Personality Types</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
};

export default Navbar;