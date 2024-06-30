import axios from 'axios';

// Action Types
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// API base URL
const API_BASE_URL = 'http://localhost:3001';

// Action Creators
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    dispatch({ type: FETCH_PRODUCT_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const updateCartItemQuantity = (productId, quantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { productId, quantity },
});

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    const user = response.data.find(u => u.email === email && u.password === password);
    if (user) {
      dispatch({ type: LOGIN_SUCCESS, payload: user.id });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: 'Invalid email or password' });
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => ({
  type: LOGOUT
});