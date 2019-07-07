import React from 'react';
import { Link } from 'react-router-dom';
import './header.sass';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
  <header className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <nav className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
    </nav>
  </header>
);

export default Header;
