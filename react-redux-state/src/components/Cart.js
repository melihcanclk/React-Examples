import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
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
            <button onClick={() => props.removeFromCart(cartItem)}>
              Remove From Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
