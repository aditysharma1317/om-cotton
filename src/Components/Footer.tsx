import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F8F7F3] pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="text-2xl font-semibold tracking-wider mb-6">
                            <span className="text-[#D88F70]">Om</span> <span className="text-gray-800">Cottons</span>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Your trusted partner in sourcing premium organic cotton with transparency and sustainability.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Home</a></li>
                            <li><a href="#" data-readdy="true" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Products</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Sustainability</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">About Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Supplier Verification</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Quality Assessment</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Certification Support</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Logistics Solutions</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Custom Sourcing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6 tracking-wide">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#D88F70]"></i>
                                <span className="text-gray-600">Vaishno Niketan, CEERI Road, Pilani, Rajasthan - 333031</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone mr-3 text-[#D88F70]"></i>
                                <span className="text-gray-600"> +91 9664348046</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope mr-3 text-[#D88F70]"></i>
                                <span className="text-gray-600">info@omcottons.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 Om Cottons. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;