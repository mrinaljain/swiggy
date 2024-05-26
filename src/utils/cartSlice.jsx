import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items: []
   },
   reducers: {
      addItem: (state, action) => {
         state.items.push(action.payload);
      },
      removeItem: (state, action) => {
         // state.cart.items.filter
      },
      clearCart: (state) => {
         state.items.length = 0;
      }
   }
});

export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;