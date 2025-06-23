import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Trash2 } from 'lucide-react';
import { addToCart } from '../store/slices/cartSlice';
import { removeFromWishlist, clearWishlist } from '../store/slices/wishlistSlice';
import { addNotification } from '../store/slices/uiSlice';
import './WishlistPage.css';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector(state => state.wishlist);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(addNotification({
      type: 'success',
      message: `${product.name} added to cart!`,
      duration: 3000
    }));
  };

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
    dispatch(addNotification({
      type: 'info',
      message: 'Item removed from wishlist',
      duration: 2000
    }));
  };

  const handleClearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      dispatch(clearWishlist());
      dispatch(addNotification({
        type: 'info',
        message: 'Wishlist cleared',
        duration: 2000
      }));
    }
  };

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="wishlist-container">
          <div className="empty-wishlist">
            <Heart size={64} />
            <h2>Your wishlist is empty</h2>
            <p>Save items you love to your wishlist and they'll appear here</p>
            <button className="continue-shopping-button" onClick={handleContinueShopping}>
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <motion.div
          className="wishlist-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>My Wishlist ({items.length} items)</h1>
          {items.length > 0 && (
            <button className="clear-wishlist-button" onClick={handleClearWishlist}>
              <Trash2 size={16} />
              Clear All
            </button>
          )}
        </motion.div>

        <div className="wishlist-grid">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="wishlist-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              layout
            >
              <div className="wishlist-item-image">
                <img src={item.image} alt={item.name} />
                <button
                  className="remove-from-wishlist"
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  aria-label="Remove from wishlist"
                >
                  <Heart size={18} fill="currentColor" />
                </button>
              </div>
              
              <div className="wishlist-item-info">
                <div className="wishlist-item-brand">{item.brand}</div>
                <h3 className="wishlist-item-name">{item.name}</h3>
                <div className="wishlist-item-price">${item.price}</div>
                
                <div className="wishlist-item-actions">
                  <button
                    className="add-to-cart-from-wishlist"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                  <button
                    className="view-product-button"
                    onClick={() => handleViewProduct(item.id)}
                    aria-label="View product"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;