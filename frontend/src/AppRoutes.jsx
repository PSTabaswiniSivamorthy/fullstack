import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import CakePage from "./pages/Food/CakePage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/cake/:id" element={<CakePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
