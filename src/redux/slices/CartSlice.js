import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

export const { remove, add } = CartSlice.actions;
export default CartSlice.reducer;
