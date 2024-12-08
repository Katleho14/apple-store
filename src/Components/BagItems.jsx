import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { increaseQuantity, decreaseQuantity } from '../redux/cartSlice'; // Import actions
import '../styles'

const BagItems = () => {
  const items = useSelector((state) => state.cart.items); // Access the cart items from Redux store
  const dispatch = useDispatch(); // Initialize dispatch

  // Fallback if the cart is empty or items are undefined
  if (!items || items.length === 0) {
    return <p>Your bag is empty.</p>;
  }

  // Handle increasing product quantity
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id)); // Dispatch increaseQuantity action
  };

  // Handle decreasing product quantity
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id)); // Dispatch decreaseQuantity action
  };

  return (
    <div className="bag-container">
      {items.map((item) => (
        <div key={item.id} className="bag-items-con">
          <div className="bag-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="bag-details">
            <h3>{item.name}</h3>
            <p className="color">{item.color}</p>
            <p className="description">{item.description}</p>
            <div className="rating">
              <span>⭐⭐⭐⭐⭐</span> <p>{item.rating} / 5</p>
            </div>
            <p className="price">
              ${item.price.toFixed(2)} <span> x {item.quantity}</span>
            </p>
            <div className="quantity-controls">
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BagItems;
