import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const addToCart = (book) => {
    alert(`${book.name} added to cart!`);
    return {
        type: ADD_TO_CART,
        payload: book
    };
};

const removeFromCart = (book) => {
    alert(`${book.name} removed from cart!`);
    return {
        type: REMOVE_FROM_CART,
        payload: book
    };
};

export { addToCart, removeFromCart };
