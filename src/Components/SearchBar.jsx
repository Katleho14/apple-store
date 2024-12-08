import React from 'react';
import '../styles/searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <label className="search-label" htmlFor="search-input">Search Item</label>
      <input
        type="text"
        id="search-input"
        className="search-input"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
      />
    </div>
  );
};

export default SearchBar;
