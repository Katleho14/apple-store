import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { closeCart, updateQuantity, removeFromCart } from '../../store/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import './CartDrawer.css';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, items, total, itemCount } = useSelector(state => state.cart);

  const handleClose = () => {
    dispatch(closeCart());
  };

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    dispatch(closeCart());
    navigate('/checkout');
  };

  const handleViewCart = () => {
    dispatch(closeCart());
    navigate('/cart');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            className="cart-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="cart-header">
              <h2>Shopping Cart ({itemCount})</h2>
              <button className="close-button" onClick={handleClose}>
                <X size={24} />
              </button>
            </div>

            <div className="cart-content">
              {items.length === 0 ? (
                <div className="empty-cart">
                  <ShoppingBag size={48} />
                  <h3>Your cart is empty</h3>
                  <p>Add some products to get started</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="cart-item"
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="item-image"
                        />
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p className="item-brand">{item.brand}</p>
                          <div className="item-price">${item.price}</div>
                        </div>
                        <div className="item-controls">
                          <div className="quantity-controls">
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={16} />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <button
                            className="remove-button"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="cart-footer">
                    <div className="cart-total">
                      <div className="total-row">
                        <span>Subtotal:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      <div className="total-row">
                        <span>Shipping:</span>
                        <span>Free</span>
                      </div>
                      <div className="total-row total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="cart-actions">
                      <button className="view-cart-button" onClick={handleViewCart}>
                        View Cart
                      </button>
                      <button className="checkout-button" onClick={handleCheckout}>
                        Checkout
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;