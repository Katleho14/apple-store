import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, ShoppingBag, Menu, User } from 'lucide-react';
import { toggleSidebar } from '../../store/slices/uiSlice';
import { toggleCart } from '../../store/slices/cartSlice';
import { setSearchQuery } from '../../store/slices/productsSlice';
import SearchBar from '../Search/SearchBar';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector(state => state.cart);
  const { searchQuery } = useSelector(state => state.products);

  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  };

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  const handleSearchChange = (query) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button 
            className="menu-button"
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          
          <div className="logo">
            <h1>TechStore</h1>
          </div>
        </div>

        <div className="header-center">
          <SearchBar 
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for products..."
          />
        </div>

        <div className="header-right">
          <button className="icon-button" aria-label="User account">
            <User size={24} />
          </button>
          
          <button 
            className="cart-button"
            onClick={handleCartClick}
            aria-label={`Shopping cart with ${itemCount} items`}
          >
            <ShoppingBag size={24} />
            {itemCount > 0 && (
              <span className="cart-badge">{itemCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;