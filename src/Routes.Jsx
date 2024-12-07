import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import CartPage from './pages/CartPage'; 
import ContentSection from "./Components/ContentSection";
import ItemView from "./pages/ItemView";
import DashboardBag from "./Components/DashboardBag";
import Checkout from './pages/Checkout';
import Address from "./pages/Address";
import Payment from "./pages/Payment";
 



function AppRoutes() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/dashboard" element={<ContentSection />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product/:id" element={<ItemView />} />
                    <Route path="/dashboard-bag" element={<DashboardBag />} />
                    <Route path="/Checkout" element={<Checkout />} /> 
                    <Route path="/address" element={<Address/>} />
                    <Route path="/Payment" element={<Payment/>} />
                


                </Routes>
            </div>
        </Router>
    );
}

export default AppRoutes;

