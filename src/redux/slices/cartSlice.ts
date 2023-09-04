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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteFromCart(state, action: PayloadAction<string>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    minusQty(state, action: PayloadAction<string>) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem?.qty > 1) {
        existingItem.qty -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    changeCart(state, action: PayloadAction<ProductInCart[]>) {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, deleteFromCart, minusQty, clearCart, changeCart } =
  cartSlice.actions;
export default cartSlice.reducer;
