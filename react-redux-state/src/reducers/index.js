import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === "ADD_TO_CART") {
    // reshape cart items so that if we have 2 items with same id, we can show them as 1 item with quantity 2
    const cartItem = state.cart.find((item) => item.id === action.payload.id);
    const cartItemQuantity = cartItem ? cartItem.quantity : 0;
    const newCartItem = {
      ...action.payload,
      quantity: cartItemQuantity + 1
    };
    console.log({ newCartItem });
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id).concat(newCartItem)
    };
  }
  else if (action.type === "REMOVE_ALL_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id)
    };
  }
  else if (action.type === "REDUCE_FROM_CART") {
    const cartItem = state.cart.find((item) => item.id === action.payload.id);
    const cartItemQuantity = cartItem ? cartItem.quantity : 0;
    const newCartItem = {
      ...action.payload,
      quantity: (cartItemQuantity - 1 > 0) ? cartItemQuantity - 1 : 0
    };
    const cartIndex = state.cart.findIndex((item) => item.id === action.payload.id);
    state.cart[cartIndex] = newCartItem;
    return {
      ...state,
      cart: [...state.cart]
    };
  }
  else if (action.type === "INCREMENT_TO_CART") {
    const cartItem = state.cart.find((item) => item.id === action.payload.id);
    const cartItemQuantity = cartItem ? cartItem.quantity : 0;
    const newCartItem = {
      ...action.payload,
      quantity: cartItemQuantity + 1
    };
    const cartIndex = state.cart.findIndex((item) => item.id === action.payload.id);
    state.cart[cartIndex] = newCartItem;
    return {
      ...state,
      cart: [...state.cart]
    };
  }
  return state;
};
