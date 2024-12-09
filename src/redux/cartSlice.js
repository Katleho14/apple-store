import { createSlice } from '@reduxjs/toolkit';

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity; // Update quantity
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Add item with default quantity
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Export the actions
export const { addItem, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;