import React from 'react';
import '../components/site.css';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav className="siteNavBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/photography">Photography</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;