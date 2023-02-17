const addToCart = (book) => {
    alert(`${book.name} added to cart!`);
    return {
        type: "ADD_TO_CART",
        payload: book
    };
};

const removeAllFromCart = (book) => {
    alert(`${book.name} removed from cart!`);
    return {
        type: "REMOVE_ALL_FROM_CART",
        payload: book
    };
};

const reduceFromCart = (book) => {
    return {
        type: "REDUCE_FROM_CART",
        payload: book
    };
};

const incrementToCart = (book) => {
    return {
        type: "INCREMENT_TO_CART",
        payload: book
    };
};


export { addToCart, removeAllFromCart, reduceFromCart, incrementToCart };
