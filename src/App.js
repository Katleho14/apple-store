import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import Payment from './pages/Payment';
import Address from './pages/Address';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/Checkout';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* The path for the main dashboard page */}
          <Route path="/" element={<Dashboard />} />


          {/* Other routes remain unchanged */}
          <Route path="/bag" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

