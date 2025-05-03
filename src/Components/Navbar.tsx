// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Banner from './UnderConstructionBanner';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = (path: string) =>
        `transition-colors duration-400 tracking-wide cursor-pointer ${location.pathname === path ? 'text-[#D88F70] font-medium' : 'hover:text-[#D88F70]'
        }`;

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-400 ${isScrolled ? 'bg-[#F8F7F3] shadow-sm' : 'bg-transparent'}`}>
                <Banner />
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-semibold tracking-wider">
                            <Link to="/" className="cursor-pointer">
                                <span className="text-[#D88F70]">Om</span> <span className="text-gray-800">Cottons</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className={navLinkClasses('/')}>Home</Link>
                            <Link to="/products" className={navLinkClasses('/products')}>Products</Link>
                            <Link to="/blogs" className={navLinkClasses('/blogs')}>Blogs</Link>
                            <Link to="/sustainability" className={navLinkClasses('/sustainability')}>Sustainability</Link>
                            <Link to="/about" className={navLinkClasses('/about')}>About</Link>
                            <Link to="/contact" className={navLinkClasses('/contact')}>Contact</Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/request-samples"><button className="px-5 py-2 bg-[#ADC4A0] text-white rounded-button hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">Request Samples</button></Link>
                            <button className="px-5 py-2 border border-[#D88F70] text-[#D88F70] rounded-button hover:bg-[#D88F70] hover:text-white transition-colors duration-400 whitespace-nowrap cursor-pointer">Book a Call</button>
                        </div>
                        <div className="md:hidden cursor-pointer">
                            <i className="fas fa-bars text-xl"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
