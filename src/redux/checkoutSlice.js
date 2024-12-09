// checkoutSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    address:null,
    paymentMethod:null,
    cart: {
        items: [], 
    },
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        updateAddress: (state, action) => {
            state.address = action.payload;
        },
        updatePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },
        updateCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const { updateAddress, updatePaymentMethod, updateCart } = checkoutSlice.actions;


export default checkoutSlice.reducer;
