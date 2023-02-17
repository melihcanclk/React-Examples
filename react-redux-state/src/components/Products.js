import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import Header from "./Header";

const Products = (props) => {
  return (
    <div>
      <Header to={'cart'} toLabel={'Card'} />
      {props.bookList.map((book, key) => (
        <div key={key} className="book">
          <img src={book.image} alt="Simyaci" />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: &#8378; {book.price}</p>
            <button onClick={() => props.addToCart(book)}>Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bookList: state.bookList
});

export default connect(mapStateToProps, { addToCart })(Products);
