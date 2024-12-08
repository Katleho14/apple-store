import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice'; // Import addToCart action
import { Link } from 'react-router-dom'; 
import '../Styles/Dashboard/ProductGrid.css';
import addCartBtn from '../Assets/addCartBtn.png';

const ProductGrid = () => {
  const products = useSelector((state) => state.products.items); // Get product data from Redux state
  const dispatch = useDispatch(); // Use dispatch to add products to cart

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-container">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            {/* Use shortDescription instead of description */}
            <p className="product-description">{product.description}</p>
            <div className="product-price">
              {/* Ensure price is a number and display it properly */}
              {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : 'Price not available'}
              <img 
                src={addCartBtn} 
                className='add-bagIcon' 
                alt="Add to cart"
                onClick={() => handleAddToCart(product)} // Add product to cart on click
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
