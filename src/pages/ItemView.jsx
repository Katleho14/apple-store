import React from 'react';
import {  Link, useParams } from 'react-router-dom';
import '../styles/ItemView.css';
import { useSelector, useDispatch } from 'react-redux';
import {addItem} from '../redux/slices/cartSlice';
import SideBar from '../Components/SideBar';
import DashboardBag from '../Components/DashboardBag';



const ItemView = () => {
  const { id } = useParams(); // Get product ID from the URL parameter
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(id)) // Correct variable name
  ); // Find the product based on the ID


  console.log(product)//test
  const dispatch = useDispatch(); // Initialize dispatch

  // Handle adding product to cart
  const handleAddToCart = () => {
    dispatch(addItem(product)); // Dispatch the addItem action with the current product
  };

  // If the product is not found, return an error message
  if (!product) {
    return <div>Product not found!</div>;
  }
//className="sidebar"
  return (
    <>
   
    <div className="detail-page">
    <SideBar className="sidebar"/>
      <div className="product-page-section">
        <div className="product-img">
          <span className="back-text">
           <Link to="/"> Back </Link> 
          </span>
          
          <div className="side-images">
            {/* Side images, these could be different angles of the product */}
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>

          {/* Main product image */}
          <img src={product.image} alt={product.name} className='main-image' />
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
      <DashboardBag className="sidebag" /> {/* Assuming DashboardBag is Sidebag */}
    </div>
    </>
  );
};

export default ItemView;
