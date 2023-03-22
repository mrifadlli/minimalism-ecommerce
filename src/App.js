import React from "react";
import { Navbar, Footer, Sidebar } from "./Component";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/" element={<Products />}/>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
