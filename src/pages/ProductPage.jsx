import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';
import { addToCart } from '../store/slices/cartSlice';
import { addNotification } from '../store/slices/uiSlice';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = useSelector(state => 
    state.products.items.find(item => item.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    dispatch(addNotification({
      type: 'success',
      message: `${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart!`,
      duration: 3000
    }));
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-page">
      <div className="product-container">
        <motion.button
          className="back-button"
          onClick={() => navigate(-1)}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} />
          Back
        </motion.button>

        <div className="product-layout">
          <div className="product-images">
            <div className="main-image">
              <motion.img
                key={selectedImage}
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
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
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className="image-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-details">
            <div className="product-header">
              <span className="product-brand">{product.brand}</span>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">{product.description}</p>
              
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? 'filled' : 'empty'}
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="product-pricing">
              <div className="price-container">
                <span className="current-price">${product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice}</span>
                )}
                {discountPercentage > 0 && (
                  <span className="discount-badge">Save {discountPercentage}%</span>
                )}
              </div>
              
              <div className="stock-info">
                <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </span>
                {product.fastShipping && (
                  <span className="shipping-info">🚚 Fast Shipping Available</span>
                )}
              </div>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-controls">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                <motion.button
                  className="add-to-cart-button"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </motion.button>
                
                <motion.button
                  className="wishlist-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={20} />
                </motion.button>
              </div>
            </div>

            <div className="product-features">
              <h3>Key Features</h3>
              <ul>
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                )) || (
                  <li>Premium quality construction</li>
                )}
              </ul>
            </div>

            <div className="product-guarantees">
              <div className="guarantee-item">
                <Truck size={20} />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="guarantee-item">
                <RotateCcw size={20} />
                <span>30-day return policy</span>
              </div>
              <div className="guarantee-item">
                <Shield size={20} />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-description-section">
          <h2>Product Description</h2>
          <p>{product.longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;