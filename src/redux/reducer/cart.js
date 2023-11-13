import { createSlice } from "@reduxjs/toolkit";

const initialState = { price: 0, list: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.list = [...state.list, { ...payload, count: 1 }];
    },

    removeItem: (state, { payload }) => {
      const index = state.list.findIndex(
        (product) => product.id === payload.id
      );
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },

    modifyItem: (state, { payload }) => {
      const index = state.list.findIndex(
        (product) => product.id === payload.id
      );
      state.list = [
        ...state.list.slice(0, index),
        { ...state.list[index], count: payload.count },
        ...state.list.slice(index + 1),
      ];
    },

    searchProduct: (state, action) => {
      state.keyword = action.payload;
    },

    increaseItemPrice: (state, {payload}) => {
      state.price = state.price + payload.amount;
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
