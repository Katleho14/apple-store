import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import CartDrawer from '../Cart/CartDrawer';
import Notifications from '../UI/Notifications';
import './Layout.css';

const Layout = ({ children }) => {
  const { sidebarOpen } = useSelector(state => state.ui);
  const { isOpen: cartOpen } = useSelector(state => state.cart);

  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {children}
      </main>
      <CartDrawer />
      <Notifications />
      {(sidebarOpen || cartOpen) && <div className="overlay" />}
    </div>
  );
};

export default Layout;