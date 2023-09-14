const initialState = {
  cart: [],
};

export const ADD_TO_CART = "ADD_TO_CART";

// Action creator for adding a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Action creator for removing a product from the cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      // Check if the product is already in the cart
      const isProductInCart = state.cart.some((item) => item.id === payload.id);
      if (isProductInCart) {
        // If it's in the cart, update the quantity
        const updatedCart = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If it's not in the cart, add it with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, { ...payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter((item) => item.id !== payload);
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};

export default cartReducer;
