// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducer
  },
});

export default store;