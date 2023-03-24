import React from 'react';
import { Navbar, Footer, Sidebar } from './Component';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/Product.page';
import TShirtProduct from './Component/product/items_product/tShirt.product';
import JacketProduct from './Component/product/items_product/jacket.product';
import OversizedProduct from './Component/product/items_product/oversized.product';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/tshirt" element={<TShirtProduct />} />
          <Route path="/products/jacket" element={<JacketProduct />} />
          <Route path="/products/oversized" element={<OversizedProduct />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
