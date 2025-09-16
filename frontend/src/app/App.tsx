import React from 'react';
import './App.css';
import ShopPage from "../pages/ShopsPage";
import Header from "../shared/components/Header";
import FlowersPage from "../pages/FlowersPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";

function App() {
  return (
      <Router>
          <Header/>
          <Routes>
             <Route path="/" element={<ShopPage/>}/>
              <Route path="/shops/:shopId/flowers" element={<FlowersPage/>}/>
              <Route path="/orders" element={<CartPage/>}/>
          </Routes>
      </Router>
  );
}

export default App;
