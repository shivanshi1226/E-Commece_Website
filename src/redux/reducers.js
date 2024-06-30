import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_DETAILS_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM_QUANTITY,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from './actions';
  
  const initialState = {
    products: [],
    productDetails: null,
    cart: [],
    auth: {
      token: null,
      error: null,
    },
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload };
      case FETCH_PRODUCT_DETAILS_SUCCESS:
        return { ...state, productDetails: action.payload };
      case ADD_TO_CART:
        const existingItem = state.cart.find(item => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      case REMOVE_FROM_CART:
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
      case UPDATE_CART_ITEM_QUANTITY:
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.productId
              ? { ...item, quantity: Math.max(0, action.payload.quantity) }
              : item
          ).filter(item => item.quantity > 0),
        };
      case LOGIN_SUCCESS:
        return { ...state, auth: { token: action.payload, error: null } };
      case LOGIN_FAILURE:
        return { ...state, auth: { token: null, error: action.payload } };
      default:
        return state;
    }
  };
  
  export default rootReducer;