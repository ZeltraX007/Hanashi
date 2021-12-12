import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {auth} from '../../firebase/firebase.utils.js';
import { ReactComponent as Logo } from '../../assets/han.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selector.js';

import './header.styles.scss';



const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <div class="dropdown">
        <div class="dropbtn">DROPDOWN</div>
  
        <div class="dropdown-one">
          <div id="link1" class="dItem">Link 1
           
            <div class="dropdown-two">
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop">Import</Link></div>
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
      <p className="king"> <ShoppingCartIcon />{" "}</p>
  </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
