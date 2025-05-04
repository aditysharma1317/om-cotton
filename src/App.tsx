import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products"; 
import Sustainability from "./Pages/Sustainability"; 
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import RequestSample from "./Pages/Request-Sample";
import Blogs from "./Pages/Blogs";
import BlogDetail from './Pages/BlogDetail';

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
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
