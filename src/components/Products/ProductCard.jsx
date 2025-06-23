import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star } from 'lucide-react';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleWishlist } from '../../store/slices/wishlistSlice';
import { addNotification } from '../../store/slices/uiSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(state => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(product));
    dispatch(addNotification({
      type: 'success',
      message: `${product.name} added to cart!`,
      duration: 3000
    }));
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(product));
    dispatch(addNotification({
      type: isInWishlist ? 'info' : 'success',
      message: isInWishlist 
        ? `${product.name} removed from wishlist` 
        : `${product.name} added to wishlist!`,
      duration: 2000
    }));
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      className="product-card"
      onClick={handleCardClick}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        
        {product.tags?.includes('bestseller') && (
          <span className="product-badge bestseller">Bestseller</span>
        )}
        {product.tags?.includes('new') && (
          <span className="product-badge new">New</span>
        )}
        {discountPercentage > 0 && (
          <span className="product-badge discount">-{discountPercentage}%</span>
        )}
        
        <div className="product-actions">
          <button
            className={`action-button wishlist ${isInWishlist ? 'active' : ''}`}
            onClick={handleToggleWishlist}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={18} fill={isInWishlist ? "currentColor" : "none"} />
          </button>
          <button
            className="action-button cart"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'filled' : 'empty'}
              />
            ))}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="product-pricing">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>

        <div className="product-meta">
          {product.fastShipping && (
            <span className="shipping-badge">Fast Shipping</span>
          )}
          <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;