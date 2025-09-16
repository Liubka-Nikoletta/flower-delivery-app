import React from 'react';
import './App.css';
import ShopPage from "../pages/ShopsPage";
import Header from "../shared/components/Header";
import FlowersPage from "../pages/FlowersPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <Header/>
          <Routes>
             <Route path="/" element={<ShopPage/>}/>
              <Route path="/shops/:shopId/flowers" element={<FlowersPage/>}/>
          </Routes>
      </Router>
  );
}

export default App;
