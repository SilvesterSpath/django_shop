import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
} from './reducers/orderReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
