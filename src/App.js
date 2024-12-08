import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import Payment from './pages/Payment';
import Address from './pages/Address';
import BagPage from './pages/BagPage';
import CheckoutPage from './pages/Checkout';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* The path for the main dashboard page */}
          <Route path="/" element={<Dashboard />} />

          {/* The path for the product page now includes a product ID as a URL parameter */}
          <Route path="/product/:id" element={<ProductPage />} />

          {/* Other routes remain unchanged */}
          <Route path="/bag" element={<BagPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

