

// redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import cartReducer from '../redux/addressSlice'
import productSlice from '../redux/productSlice'
import checkoutSlice from '../redux/checkoutSlice';
import addressReducer from './addressSlice'




const rootReducer = combineReducers({
    cart: cartReducer, // Use the actual slice reducer
    products : productSlice,
    checkout: checkoutSlice,
    address: addressReducer,


});

const store = configureStore({
  reducer:rootReducer

})

export default store;
