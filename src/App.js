import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";


function App() {
  return (
    <div className="App">
     
        <Routes>
        {/* more pages to be added here later */}
        
        <Route path="/products" element={<ProductListPage />} />
        <Route path ="/products/:id" element={<ProductDetailsPage />} />
        <Route path ="/products/cart" element={<ShoppingCartPage />} />
      </Routes>   
          
          
          </div>
  );
}

export default App;
