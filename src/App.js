import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Cart from "./pages/Cart";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="App">
     <NavBar />
        <Routes>
        {/* more pages to be added here later */}
        <Route path ="/" element ={<ProductListPage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path ="/products/:id" element={<ProductDetailsPage />} />
         <Route path ="/products/cart" element={<Cart />} /> 
      </Routes>   
          
          
          </div>
  );
}

export default App;
