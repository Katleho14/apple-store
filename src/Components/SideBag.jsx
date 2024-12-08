import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation to get current path
import { useSelector } from 'react-redux'; // Import useSelector to get data from the Redux store
import '../styles/sidebag.css'
import { FaShoppingBag } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa'; // Import checkout icon

const Sidebag = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Get current route path
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from the Redux store

  const handleClick = () => {
    if (location.pathname === '/bag') {
      // Navigate to checkout if the current route is /bag
      navigate('/address');
    } else {
      // Navigate to the /bag route on any other page
      navigate('/bag');
    }
  };

  return (
    <div className="shopping-bag">
      <h3 className="bag-title">Bag</h3>
      <div className="bag-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="bag-item">
              <img src={item.image} alt={item.name} className="bag-item-image" />
            </div>
          ))
        ) : (
          <p>Your bag is empty</p>
        )}
      </div>
      <button className="view-bag-button" onClick={handleClick}>
        {location.pathname === '/bag' ? (
          <>
            <span className="bag-icon"><FaCreditCard /></span> Checkout
          </>
        ) : (
          <>
            <span className="bag-icon"><FaShoppingBag /></span> View Bag
          </>
        )}
      </button>
    </div>
  );
};

export default Sidebag;
