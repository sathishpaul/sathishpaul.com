import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header className='siteHeader'>
    <h1>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
    </h1>
  </header>
);

export default Header
