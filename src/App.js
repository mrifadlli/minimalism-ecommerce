import React from 'react';
import { Navbar, Footer, Sidebar } from './Component';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './Pages/productPage';
import TShirtProduct from './Component/product/items_product/tshirtProduct';
import JacketProduct from './Component/product/items_product/jacketProduct';
import OversizedProduct from './Component/product/items_product/oversizedProduct';
import DetailProduct from './Component/detail_Product/detailProduct';
import Login from './Component/login/login';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<DetailProduct />} />
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
