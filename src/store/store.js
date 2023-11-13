import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/reducer/cart";
import authReducer from "../redux/reducer/auth";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
