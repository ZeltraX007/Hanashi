import React from 'react'
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { clearAll } from '../../redux/cart/cart.actions.js'

function StripeButton({ price, cartItem, clearAll }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hcr59If3Hn5BLfLNdteyaTLDzz6Sf4g9CMEK21WZm7BHjEXbVLl2uqXNK4b9Gex3GBZrZTiP2aqV5QkncN7uasa001eoP4pJr'

    const onToken = token => {
        console.log(token)
        clearAll(cartItem)
        alert("dummy payment successfull")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name='Hanashi Corp.'
            billingAddress
            shippingAddress
            image='https://i.ibb.co/zJYLsRL/han2.png'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    clearAll: item => dispatch(clearAll(item))
})

export default connect(null, mapDispatchToProps)(StripeButton)