import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// add prices of all items in cart

const Header = (props) => {
    const totalPrice = props.cart.reduce((total, item) => (
        total + (item.price * item.quantity)
    ), 0)

    return (
        <div>
            <h2>
                <Link to={`/${props.to}`}>{`Go To ` + props.toLabel}</Link>
            </h2>
            <h3 className='cartItem'>Total Price: &#8378;{totalPrice.toFixed(2)}</h3>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Header);