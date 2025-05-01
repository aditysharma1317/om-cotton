import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products"; 
import Sustainability from "./Pages/Sustainability"; 
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RequestSample from "./Pages/Request-Sample";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request-samples" element={<RequestSample />} />
      </Routes>
    </BrowserRouter>
  );
}
