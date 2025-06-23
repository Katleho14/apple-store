import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Filter, Grid, List } from 'lucide-react';
import ProductGrid from '../components/Products/ProductGrid';
import { setSelectedCategory, setSortBy } from '../store/slices/productsSlice';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { selectedCategory, sortBy, items } = useSelector(state => state.products);

  const categories = ['all', ...new Set(items.map(item => item.category))];
  
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name A-Z' }
  ];

  return (
    <div className="home-page">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <h1>Discover Amazing Products</h1>
          <p>Find the latest tech gadgets and accessories at unbeatable prices</p>
        </div>
      </motion.div>

      <div className="filters-section">
        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="category-filter">Category:</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sort-filter">Sort by:</label>
            <select
              id="sort-filter"
              value={sortBy}
              onChange={(e) => dispatch(setSortBy(e.target.value))}
              className="filter-select"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="view-options">
            <button className="view-button active" aria-label="Grid view">
              <Grid size={20} />
            </button>
            <button className="view-button" aria-label="List view">
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      <ProductGrid />
    </div>
  );
};

export default HomePage;