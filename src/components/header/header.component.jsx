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
        <div class="dropbtn">CATEGORIES</div>
  
        <div class="dropdown-one">
          <div id="link1" class="dItem">Fiction 
            <div class="dropdown-two">
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Science-Fiction</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Romance</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Fantasy</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Mystery</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Horror</nobr></Link></div>
            </div>
          </div>
          <div id="link1" class="dItem" href="#">Arts
          <div class="dropdown-two">
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Architecture</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Design</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Painting</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Photography</nobr></Link></div>
            </div>
          </div>
          <div id="link1" class="dItem" href="#">Childrens
          <div class="dropdown-two">
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Baby Books</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Picture Books</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Bedtime Books</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Stories in Rhyme</nobr></Link></div>
            </div>
          </div>
          <div class="dItem" href="#">Self Help</div>
          <div id="link1" class="dItem" href="#"><nobr>Science and Technology</nobr>
          <div class="dropdown-two">
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Maths</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Biology</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Physics</nobr></Link></div>
              <div class="dItem" id="file" href="#"><Link className="option" to="/shop"><nobr>Chemistry</nobr></Link></div>
            </div>
          </div>
          <div class="dItem" href="#">Architecture</div>
          <div class="dItem" href="#"><nobr>Business and Economics</nobr></div>
          <div class="dItem" href="#"><nobr>Biographies and Memoirs</nobr></div>
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
