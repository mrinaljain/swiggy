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
         state.items.filter((item) => { item.id != action.payload.id });
      },
      clearCart: (state) => {
         state.items.length = 0;
      }
   }
});

export default cartSlice.reducer;
export const { addItem, clearCart, removeItem } = cartSlice.actions;