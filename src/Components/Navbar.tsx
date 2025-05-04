// src/components/Navbar.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Banner from './UnderConstructionBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import BreadCrumb from './BreadCrumb';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getCrumb = (path: string) => {
        if (path === '/' || path === '') return 'Home';
        const seg = path.replace(/^\/+|\/+$/g, '').split('/')[0];
        return seg.charAt(0).toUpperCase() + seg.slice(1);
    };

    const crumb = getCrumb(location.pathname);

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
                        <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 px-6 py-4">
                        <div className="flex flex-col space-y-4">
                            <Link to="/" className={navLinkClasses('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                            <Link to="/products" className={navLinkClasses('/products')} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                            <Link to="/blogs" className={navLinkClasses('/blogs')} onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
                            <Link to="/sustainability" className={navLinkClasses('/sustainability')} onClick={() => setIsMobileMenuOpen(false)}>Sustainability</Link>
                            <Link to="/about" className={navLinkClasses('/about')} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            <Link to="/contact" className={navLinkClasses('/contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                            <Link to="/request-samples" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full py-2 bg-[#ADC4A0] text-white rounded-button hover:bg-[#9BB58E] transition-colors duration-400">Request Samples</button>
                            </Link>
                            <button className="w-full py-2 border border-[#D88F70] text-[#D88F70] rounded-button hover:bg-[#D88F70] hover:text-white transition-colors duration-400">Book a Call</button>
                        </div>
                    </div>
                )}
            </nav>
            {/* only render a crumb‐header on subpages */}
            {location.pathname !== '/' && (
                <div className="pt-24 pb-8 bg-white">
                    <div className="container mx-auto px-6">
                        <BreadCrumb crumb={crumb} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
