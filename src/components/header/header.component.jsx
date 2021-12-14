import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selector.js';
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div >
      <a href='/'>
        <img id='logo' alt="Hanashi logo" src="https://i.ibb.co/t49fHxV/han1.png"></img></a></div>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <div class="dropdown">
        <div class="dropbtn">Categories</div>
  
        <div class="dropdown-one">
          <div id="link1" class="dItem">Fiction
           
            <div class="dropdown-two">
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop">Science-Fiction</Link></div>
            </div>
          </div>
          <div class="dItem" href="#">Link 2</div>
          <div class="dItem" href="#">Link 3</div>
        </div>
      </div> 
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {
        hidden ? null:
        <CartDropdown />
    }
      {/* <p className="king">{" "}</p> */}
  </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
