import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  // Add reducers here
};

const initialState = {};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
