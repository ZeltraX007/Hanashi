import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'
import Footer from "../../components/footer/footer.component"

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
  <div>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
      cartItems.map(cartItem =>
          (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
          )
      }
      <div className='total'>
          <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
                  Please use any data for address and name and email, also use <br />
                  card number: 4242 4242 4242 4242, expiry: 02/22, cvv: 123 for dummy payment
      </div>
      <StripeButton price={total} />
    </div>
    <Footer className="footer"/>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);