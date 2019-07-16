import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.sass';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOut } from '../../firebase/firebase-utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser, hidden }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => signOut()}>
          LOG OUT
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          LOG IN
        </Link>
      )}
      <CartIcon />
    </nav>
    {!hidden && <CartDropdown />}
  </header>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
