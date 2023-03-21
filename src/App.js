import React from "react";
import { Navbar, Footer, Sidebar } from "./Component";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/Product.page";
import TShirtProduct from './Component/product/items_product/tShirt.product';
import JacketProduct from "./Component/product/items_product/jacket.product";
import OversizedProduct from './Component/product/items_product/oversized.product';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage/> }  />
          <Route path="/product/t-shirt" element={<TShirtProduct/> }  />
          <Route path="/product/jacket" element={<JacketProduct/> }  />
          <Route path="/product/oversized" element={<OversizedProduct/> }  />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
