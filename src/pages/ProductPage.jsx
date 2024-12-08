import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/sidebag.css';
import '../styles/sidebar.css';
import '../styles/product-page.css';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from '../Components/Sidebar';
import Sidebag from '../Components/SideBag';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../redux/cartSlice'; // Import addToCart action
import '../styles/Dashboard.css';

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL parameter
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  ); // Find the product based on the ID
  const dispatch = useDispatch(); // Initialize dispatch

  // Handle adding product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the current product
  };

  // If the product is not found, return an error message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="detail-page">
       <Sidebar className='sidebar'/>
      <div className="product-page-section">
        <div className="product-img">
          <span className="back-text">
            <FaArrowLeft className="back-icon" />
            <a href="/">Back</a> <br />
          </span>
          <div className="side-images">
            {/* Side images, these could be different angles of the product */}
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>

          {/* Main product image */}
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h1 className="product-h1">{product.name}</h1>
            <h3 className="product-h3">{product.description}</h3>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <h4 className="product-price">{`$${product.price.toFixed(2)}`}</h4>
            <p className="product-p">{product.detailedDescription}</p>
          </div>
        </div>

        {/* Add to bag button */}
        <button className="add-to-bag" onClick={handleAddToCart}>
          <i className="fa-solid fa-bag-shopping-plus"></i> Add to bag
        </button>
        
        <hr />
        <h2>Description</h2>
        <p>{product.longDescription}</p>
      </div>
      <Sidebag className='sidebag'/>
    </div>
  );
};

export default ProductPage;
