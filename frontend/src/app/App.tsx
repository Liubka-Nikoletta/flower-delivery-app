import React from 'react';
import './App.css';
import ShopPage from "../pages/ShopsPage";
import Header from "../shared/components/Header";
import FlowersPage from "../pages/FlowersPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "../pages/CartPage/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
      <Router>
          <Header/>
          <Routes>
             <Route path="/" element={<ShopPage/>}/>
              <Route path="/shops/:shopId/flowers" element={<FlowersPage/>}/>
              <Route path="/orders" element={<CartPage/>}/>
          </Routes>
          <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
          />
      </Router>
  );
}

export default App;
