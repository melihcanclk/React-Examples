import React from "react";
import { connect } from "react-redux";
import { incrementToCart, reduceFromCart, removeAllFromCart } from "../actions";
import Header from "./Header";

const Cart = (props) => {
  return (
    <div>
      <Header to={''} toLabel={'Books'} />
      {props.cart.map((cartItem, key) => (
        <div key={key} className="book">
          <img src={cartItem.image} alt={cartItem.name} />
          <div>
            <h4>{cartItem.name}</h4>
            <p>Yazar: {cartItem.author}</p>
            <p>Fiyat: &#8378;{cartItem.price}</p>
            <p>Count: {cartItem.quantity}</p>
            <div>
              <button onClick={() => props.reduceFromCart(cartItem)}>
                -
              </button>
              <button onClick={() => props.removeAllFromCart(cartItem)}>
                Remove From Cart
              </button>
              <button onClick={() => props.incrementToCart(cartItem)}>
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { removeAllFromCart, reduceFromCart, incrementToCart })(Cart);
