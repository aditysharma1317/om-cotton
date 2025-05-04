import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ValueProposition from '../Components/Home/ValueProposition';
import Testimonial from '../Components/Home/Testimonial';
import Hero from '../Components/Home/Hero';
import Cta from '../Components/Home/Cta';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-[#F8F7F3] text-gray-800">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Testimonial />
      <Cta />
      <Footer />
    </div>
  );
};
export default App
