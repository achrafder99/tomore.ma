import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Market from "./Components/Market";
import Cover1 from "./Components/Cover1";
import Navbar from "./Components/Navbar";
import Admin from "./Components/Admin";
import DashBoard from "./Components/DashBoard";
import AdminDashboard from "./Components/admin/AdminDashboard";
import Categories from "./Components/admin/Categories";
import Produit from "./Components/admin/Produit";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import CheckOut from "./Components/CheckOut";
import _404 from "./Components/_404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="*" element={<_404 />} />
        <Route path="/" element={<App />} />
        <Route path="/market" element={<Market />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="market/details/:id" element={<Details />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="Produit" element={<Produit />} />
        </Route>
      </Routes>
    </Router>
  </>
);
