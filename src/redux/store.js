// redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import cartReducer from './cartSlice';
import productSlice from './productSlice';
import checkoutSlice from './checkoutSlice';




const rootReducer = combineReducers({
    cart: cartReducer, // Use the actual slice reducer
    products : productSlice,
    checkout: checkoutSlice,

});

const store = configureStore({
  reducer:rootReducer

})

export default store;


