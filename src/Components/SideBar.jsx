import React from 'react';
import '../styles/sidebar.css';
import { FaShoppingBag, FaBars, FaStore, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logoImage from '../Assets/logoImage.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className={({ isActive }) => `sidebar-icon ${isActive ? '' : ''}`}>
        <img src={logoImage} className="icon top-icon" alt="Logo" />
      </NavLink>
      <NavLink to="/" className={({ isActive }) => `sidebar-icon ${isActive ? '' : ''}`}>
        <FaBars className="icon" />
      </NavLink>
      <NavLink to="/" className={({ isActive }) => `sidebar-icon ${isActive ? 'active' : ''}`}>
        <FaStore className="icon store-icon" />
      </NavLink>
      <NavLink to="/bag" className={({ isActive }) => `sidebar-icon ${isActive ? 'active' : ''}`}>
        <FaShoppingBag className="icon bag-icon" />
      </NavLink>
      <NavLink to="/logout" className={({ isActive }) => `sidebar-icon logout-icon ${isActive ? 'active' : ''}`}>
        <FaSignOutAlt className="icon bottom-icon" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
