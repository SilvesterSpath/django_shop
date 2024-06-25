import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { productListReducer } from './reducers/productReducers';

const reducer = combineReducers({
  productList: productListReducer,
});

const initialState = {};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
