import React from "react";
import "../styles/DashboardBag.css";
import cartbag from '../Assets/cartbag.png';
import { useSelector } from "react-redux";
// import { addItem, removeFromCart } from "../redux/slices/cartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import creditCard from '../Assets/creditCard.png'






function DashboardBag() {
  // selects products from redux 
  const cartItems = useSelector(state => state.cart.cartItems);
  // const dispatch = useDispatch();

  //dispatch items into the cart
  // const handleAddToCart = (item) => {
  //   dispatch(addItem(item));
  // };

  //handles the removal of items in the cart
  // const handleRemoveFromCart = (item) => {
  //   dispatch(removeFromCart(item));
  // };

  //used to navigate through paths
  const navigate = useNavigate(); 
  const location = useLocation(); 


  // conditional rendering for the paths
  const handleClick = () => {
    if (location.pathname === '/cart') {
      // Navigate to checkout if the current route is /cart
      navigate('/checkout');
    } else {
      // Navigate to the /bag route on any other page
      navigate('/cart');
    }
  };


    return (
      <>
      <div className="vertical-line"></div>
        <div className="bag-area">
<div className="bag-header">
      <h2>Bag</h2>
      <div className="bag-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <img 
            key={item.id} 
            src={item.image} 
            alt={`item.name`} 
            width={100} 
              onError={(e) => { e.target.src = 'path_to_placeholder_image.png'; }}
              />
          ))
        ) : (
          <p>Your bag is empty.</p>
        )}
      </div>
      </div>
            <div className="cta">
                <button className="cta-button" onClick={handleClick} >
                {location.pathname === '/cart' ? (
              <>
                <img className="cta-icon" src={creditCard} alt="checkout Icon" /> Checkout
              </>
            ) : (
              <>
                <img className="cta-icon" src={cartbag} alt="bag Icon" /> View Bag
              </>
            )}
                </button>
            </div>
        </div>
        </>
    );
}
export default DashboardBag;