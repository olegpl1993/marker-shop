import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductInCart {
  id: string;
  qty: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ProductInCart[],
  },
  reducers: {
    addToCart(state, action: PayloadAction<string>) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({ id: action.payload, qty: 1 });
      }
    },
    deleteFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
