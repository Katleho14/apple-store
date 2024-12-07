import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

import '../styles/CartPage.css';
// import DashboardBag from '../components/DashboardBag'; 

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <img
        className="cart-item-image"
        src={item.image || 'path_to_placeholder_image.png'}
        alt={item.name}
        onError={(e) => { e.target.src = 'path_to_placeholder_image.png'; }}
      />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="item-rating">
          <span>⭐⭐⭐⭐⭐ {item.rating} 4.5/5</span>
        </div>
        <div className="item-price">
          <span>${item.price.toFixed(2)} x {item.quantity}</span>
        </div>
        <div className="item-quantity-remove-container">
          <div className="item-quantity">
            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
          </div>
          <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(addItem({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity || 0),
    0
  ).toFixed(2);

  const handleCheckout = () => {
    navigate('/Checkout');
  };

  return (
    <div className="cart-page-wrapper">
      

      <div className="cart-page-container">
        <div className="cart-items-section">
          <h2>Check your Bag Items</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))
          )}

          <div className="cart-total">
            <h3>Total: ${totalPrice}</h3>
          </div>
        </div>

        <div className="cart-summary-section">
          <h3>Bag</h3>
          <div className="bag-items">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  className="bag-item-image"
                />
              ))
            ) : (
              <p>Your bag is empty.</p>
            )}
          </div>
          <div className="bag-total">
            <span>Bag Total: ${totalPrice}</span>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
