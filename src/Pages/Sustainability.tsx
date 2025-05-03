// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNewsletter, setShowNewsletter] = useState(false);
    const [email, setEmail] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowNewsletter(false);
        setEmail('');
        // In a real application, you would submit the email to your backend
    };
    return (
        <div className="min-h-screen font-sans bg-[#F8F7F3] text-gray-800">
            {/* Navigation */}
            <Navbar />
            <section className="relative pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=sustainable%20cotton%20farm%20with%20workers%20harvesting%20organic%20cotton%20under%20blue%20sky%2C%20lush%20green%20fields%20with%20cotton%20plants%2C%20eco-friendly%20farming%20practices%2C%20natural%20landscape%20with%20mountains%20in%20background%2C%20soft%20golden%20sunlight%2C%20environmental%20conservation%20theme%2C%20high%20quality%20professional%20photography%2C%20serene%20and%20inspiring%20atmosphere&width=1440&height=600&seq=1&orientation=landscape"
                        alt="Sustainable Cotton Farming"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-800">Our Commitment to Sustainability</h1>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            At Om Cottons, we believe in creating garments that not only look and feel good, but also do good for our planet and its people. Our sustainable practices span every aspect of our business.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#ADC4A0] text-2xl mb-2">
                                    <i className="fas fa-tint"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">60% Less Water</h3>
                                <p className="text-gray-600 text-sm">Used in our production process compared to conventional methods</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#D88F70] text-2xl mb-2">
                                    <i className="fas fa-recycle"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">85% Recycled</h3>
                                <p className="text-gray-600 text-sm">Water reused in our dyeing and finishing processes</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#6B8E9B] text-2xl mb-2">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">100% Organic</h3>
                                <p className="text-gray-600 text-sm">Cotton sourced from certified organic farms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sustainability Initiatives */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold tracking-wide mb-4">Our Sustainability Initiatives</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We're committed to making a positive impact through every aspect of our business.
                            Our sustainability initiatives focus on three key areas that guide our decisions and actions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Organic Materials */}
                        <div className="bg-[#F8F7F3] rounded-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[#ADC4A0] rounded-full flex items-center justify-center mb-6 text-white text-2xl">
                                <i className="fas fa-seedling"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Organic Materials</h3>
                            <p className="text-gray-600 mb-6">
                                We source 100% GOTS-certified organic cotton grown without harmful pesticides or synthetic fertilizers.
                                Our organic farming partners use sustainable methods that preserve soil health and biodiversity.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    <img src="https://readdy.ai/api/search-image?query=GOTS%20certification%20logo%2C%20simple%20icon%2C%20minimalist%20design%2C%20clean%20background%2C%20professional%20certification%20emblem&width=20&height=20&seq=2&orientation=squarish" alt="GOTS Certified" className="w-4 h-4 mr-1" />
                                    GOTS Certified
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    <i className="fas fa-check-circle text-[#ADC4A0] mr-1"></i>
                                    Pesticide-Free
                                </span>
                            </div>
                        </div>
                        {/* Ethical Manufacturing */}
                        <div className="bg-[#F8F7F3] rounded-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[#D88F70] rounded-full flex items-center justify-center mb-6 text-white text-2xl">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Ethical Manufacturing</h3>
                            <p className="text-gray-600 mb-6">
                                We ensure fair wages, safe working conditions, and dignified employment for all workers in our supply chain.
                                Our factories are regularly audited to meet and exceed international labor standards.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    <img src="https://readdy.ai/api/search-image?query=Fair%20Trade%20certification%20logo%2C%20simple%20icon%2C%20minimalist%20design%2C%20clean%20background%2C%20professional%20certification%20emblem&width=20&height=20&seq=3&orientation=squarish" alt="Fair Trade" className="w-4 h-4 mr-1" />
                                    Fair Trade
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    <i className="fas fa-check-circle text-[#D88F70] mr-1"></i>
                                    Living Wages
                                </span>
                            </div>
                        </div>
                        {/* Environmental Impact */}
                        <div className="bg-[#F8F7F3] rounded-lg p-8 transition-transform duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[#6B8E9B] rounded-full flex items-center justify-center mb-6 text-white text-2xl">
                                <i className="fas fa-globe-americas"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
                            <p className="text-gray-600 mb-6">
                                Our water-efficient dyeing processes, solar-powered facilities, and carbon offset programs help minimize our environmental footprint.
                                We're committed to reducing waste at every stage of production.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    <img src="https://readdy.ai/api/search-image?query=Carbon%20Neutral%20certification%20logo%2C%20simple%20icon%2C%20minimalist%20design%2C%20clean%20background%2C%20professional%20certification%20emblem&width=20&height=20&seq=4&orientation=squarish" alt="Carbon Neutral" className="w-4 h-4 mr-1" />
                                    Carbon Neutral
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    <i className="fas fa-check-circle text-[#6B8E9B] mr-1"></i>
                                    Low Water Usage
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Certification Showcase */}
            <section className="py-16 bg-[#F8F7F3]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold tracking-wide mb-4">Our Certifications</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We hold ourselves to the highest standards through internationally recognized certifications that verify our commitment to sustainability and ethical practices.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                            <div className="w-20 h-20 mx-auto mb-6">
                                <img src="https://readdy.ai/api/search-image?query=GOTS%20Global%20Organic%20Textile%20Standard%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=5&orientation=squarish" alt="GOTS Certification" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">GOTS Certified</h3>
                            <p className="text-gray-600">
                                The Global Organic Textile Standard ensures organic status of textiles from harvesting of the raw materials through environmentally and socially responsible manufacturing.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                            <div className="w-20 h-20 mx-auto mb-6">
                                <img src="https://readdy.ai/api/search-image?query=Fair%20Trade%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=6&orientation=squarish" alt="Fair Trade Certification" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fair Trade Certified</h3>
                            <p className="text-gray-600">
                                Fair Trade certification ensures that farmers and workers behind our products receive fair compensation and work in safe conditions with respect for their rights and dignity.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                            <div className="w-20 h-20 mx-auto mb-6">
                                <img src="https://readdy.ai/api/search-image?query=Recycled%20Materials%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=7&orientation=squarish" alt="Recycled Materials Certification" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Recycled Materials</h3>
                            <p className="text-gray-600">
                                This certification verifies that our recycled materials meet quality standards and truly come from post-consumer or post-industrial waste, reducing environmental impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sustainable Product Lines */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold tracking-wide mb-4">Sustainable Product Lines</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Explore our eco-friendly collections designed with sustainability at their core.
                            Each product is crafted to minimize environmental impact while maximizing quality and comfort.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=organic%20cotton%20t-shirt%20collection%20on%20minimalist%20beige%20background%2C%20sustainable%20fashion%2C%20eco-friendly%20clothing%2C%20high%20quality%20fabric%20texture%20visible%2C%20professional%20product%20photography%2C%20soft%20natural%20lighting&width=400&height=300&seq=8&orientation=landscape"
                                    alt="Organic Essentials Collection"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <div className="bg-[#ADC4A0] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Organic">
                                        <i className="fas fa-seedling"></i>
                                    </div>
                                    <div className="bg-[#D88F70] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Fair Trade">
                                        <i className="fas fa-handshake"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Organic Essentials Collection</h3>
                                <p className="text-gray-600 mb-4">
                                    Our core collection of everyday basics made from 100% GOTS-certified organic cotton.
                                </p>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-tint text-[#6B8E9B] mr-2"></i>
                                        <span className="text-sm text-gray-600">60% less water used</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-leaf text-[#ADC4A0] mr-2"></i>
                                        <span className="text-sm text-gray-600">100% organic</span>
                                    </div>
                                </div>
                                <button className="w-full bg-[#ADC4A0] text-white py-2 !rounded-button font-medium hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                    View Products
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=recycled%20cotton%20blend%20hoodie%20collection%20on%20minimalist%20beige%20background%2C%20sustainable%20fashion%2C%20eco-friendly%20clothing%2C%20high%20quality%20fabric%20texture%20visible%2C%20professional%20product%20photography%2C%20soft%20natural%20lighting&width=400&height=300&seq=9&orientation=landscape"
                                    alt="EcoBlend Collection"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <div className="bg-[#6B8E9B] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Recycled Materials">
                                        <i className="fas fa-recycle"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">EcoBlend Collection</h3>
                                <p className="text-gray-600 mb-4">
                                    Innovative garments made from a blend of organic cotton and recycled materials.
                                </p>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-recycle text-[#6B8E9B] mr-2"></i>
                                        <span className="text-sm text-gray-600">30% recycled materials</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-bolt text-[#D88F70] mr-2"></i>
                                        <span className="text-sm text-gray-600">Low carbon footprint</span>
                                    </div>
                                </div>
                                <button className="w-full bg-[#ADC4A0] text-white py-2 !rounded-button font-medium hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                    View Products
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://readdy.ai/api/search-image?query=natural%20dyed%20organic%20cotton%20polo%20shirts%20collection%20on%20minimalist%20beige%20background%2C%20sustainable%20fashion%2C%20eco-friendly%20clothing%2C%20earthy%20colors%2C%20high%20quality%20fabric%20texture%20visible%2C%20professional%20product%20photography%2C%20soft%20natural%20lighting&width=400&height=300&seq=10&orientation=landscape"
                                    alt="Natural Dye Collection"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 flex space-x-2">
                                    <div className="bg-[#ADC4A0] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Organic">
                                        <i className="fas fa-seedling"></i>
                                    </div>
                                    <div className="bg-[#D88F70] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Fair Trade">
                                        <i className="fas fa-handshake"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Natural Dye Collection</h3>
                                <p className="text-gray-600 mb-4">
                                    Premium garments colored using plant-based dyes derived from renewable sources.
                                </p>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <i className="fas fa-tint text-[#6B8E9B] mr-2"></i>
                                        <span className="text-sm text-gray-600">85% less water pollution</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-flask text-[#D88F70] mr-2"></i>
                                        <span className="text-sm text-gray-600">No synthetic dyes</span>
                                    </div>
                                </div>
                                <button className="w-full bg-[#ADC4A0] text-white py-2 !rounded-button font-medium hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                    View Products
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Manufacturing Process */}
            <section className="py-16 bg-[#F8F7F3]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold tracking-wide mb-4">Our Sustainable Manufacturing Process</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Every step in our production process is designed to minimize environmental impact while maintaining the highest quality standards.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Process timeline */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#ADC4A0] transform -translate-x-1/2"></div>
                        <div className="space-y-12 md:space-y-0">
                            {/* Step 1 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                                <div className="md:text-right mb-8 md:mb-0 md:pr-16 relative">
                                    <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 rounded-full bg-[#ADC4A0] transform translate-x-1/2 -translate-y-1/2"></div>
                                    <h3 className="text-xl font-semibold mb-3">Organic Cotton Farming</h3>
                                    <p className="text-gray-600">
                                        We partner with certified organic farms that use sustainable farming practices, avoiding harmful pesticides and synthetic fertilizers.
                                    </p>
                                    <div className="mt-4 flex md:justify-end">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800">
                                            <i className="fas fa-tint text-[#6B8E9B] mr-1"></i>
                                            40% less water used
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=organic%20cotton%20farm%20with%20workers%20harvesting%20cotton%2C%20sustainable%20agriculture%2C%20natural%20farming%20methods%2C%20bright%20daylight%2C%20professional%20documentary%20photography%2C%20people%20working%20in%20cotton%20fields%20with%20mountains%20in%20background&width=500&height=300&seq=11&orientation=landscape"
                                        alt="Organic Cotton Farming"
                                        className="w-full h-64 object-cover object-top"
                                    />
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                                <div className="order-2 md:order-1 bg-white rounded-lg overflow-hidden shadow-sm">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=eco-friendly%20cotton%20processing%20facility%2C%20workers%20sorting%20and%20processing%20raw%20cotton%2C%20clean%20modern%20factory%20interior%2C%20sustainable%20manufacturing%2C%20bright%20natural%20lighting%2C%20professional%20industrial%20photography&width=500&height=300&seq=12&orientation=landscape"
                                        alt="Sustainable Processing"
                                        className="w-full h-64 object-cover object-top"
                                    />
                                </div>
                                <div className="order-1 md:order-2 mb-8 md:mb-0 md:pl-16 relative">
                                    <div className="hidden md:block absolute left-0 top-1/2 w-4 h-4 rounded-full bg-[#ADC4A0] transform -translate-x-1/2 -translate-y-1/2"></div>
                                    <h3 className="text-xl font-semibold mb-3">Eco-Friendly Processing</h3>
                                    <p className="text-gray-600">
                                        Our processing facilities use energy-efficient equipment and water recycling systems to minimize resource consumption during ginning and spinning.
                                    </p>
                                    <div className="mt-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800">
                                            <i className="fas fa-recycle text-[#6B8E9B] mr-1"></i>
                                            85% water recycled
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                                <div className="md:text-right mb-8 md:mb-0 md:pr-16 relative">
                                    <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 rounded-full bg-[#ADC4A0] transform translate-x-1/2 -translate-y-1/2"></div>
                                    <h3 className="text-xl font-semibold mb-3">Low-Impact Dyeing</h3>
                                    <p className="text-gray-600">
                                        We use natural or low-impact dyes and advanced dyeing techniques that require less water and energy while avoiding harmful chemicals.
                                    </p>
                                    <div className="mt-4 flex md:justify-end">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800">
                                            <i className="fas fa-flask text-[#D88F70] mr-1"></i>
                                            Zero toxic chemicals
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=eco-friendly%20textile%20dyeing%20facility%2C%20workers%20using%20natural%20dyes%2C%20sustainable%20fabric%20coloring%20process%2C%20clean%20modern%20factory%20interior%2C%20bright%20natural%20lighting%2C%20professional%20industrial%20photography&width=500&height=300&seq=13&orientation=landscape"
                                        alt="Low-Impact Dyeing"
                                        className="w-full h-64 object-cover object-top"
                                    />
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                                <div className="order-2 md:order-1 bg-white rounded-lg overflow-hidden shadow-sm">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=ethical%20garment%20manufacturing%20facility%2C%20workers%20sewing%20and%20assembling%20cotton%20clothes%2C%20clean%20modern%20factory%20with%20good%20working%20conditions%2C%20sustainable%20manufacturing%2C%20bright%20natural%20lighting%2C%20professional%20industrial%20photography&width=500&height=300&seq=14&orientation=landscape"
                                        alt="Ethical Manufacturing"
                                        className="w-full h-64 object-cover object-top"
                                    />
                                </div>
                                <div className="order-1 md:order-2 mb-8 md:mb-0 md:pl-16 relative">
                                    <div className="hidden md:block absolute left-0 top-1/2 w-4 h-4 rounded-full bg-[#ADC4A0] transform -translate-x-1/2 -translate-y-1/2"></div>
                                    <h3 className="text-xl font-semibold mb-3">Ethical Manufacturing</h3>
                                    <p className="text-gray-600">
                                        Our garments are made in facilities that ensure fair wages, safe working conditions, and respect for workers' rights and well-being.
                                    </p>
                                    <div className="mt-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800">
                                            <i className="fas fa-hands-helping text-[#D88F70] mr-1"></i>
                                            Fair labor practices
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* Step 5 */}
                            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                                <div className="md:text-right mb-8 md:mb-0 md:pr-16 relative">
                                    <div className="hidden md:block absolute right-0 top-1/2 w-4 h-4 rounded-full bg-[#ADC4A0] transform translate-x-1/2 -translate-y-1/2"></div>
                                    <h3 className="text-xl font-semibold mb-3">Eco-Friendly Packaging</h3>
                                    <p className="text-gray-600">
                                        We use recycled and biodegradable materials for all our packaging, minimizing plastic use and ensuring that our shipping process is as sustainable as our products.
                                    </p>
                                    <div className="mt-4 flex md:justify-end">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800">
                                            <i className="fas fa-box text-[#6B8E9B] mr-1"></i>
                                            100% plastic-free
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=eco-friendly%20packaging%20for%20clothing%2C%20recycled%20paper%20boxes%20and%20biodegradable%20packaging%20materials%2C%20sustainable%20shipping%20materials%2C%20clean%20modern%20workspace%2C%20bright%20natural%20lighting%2C%20professional%20product%20photography&width=500&height=300&seq=15&orientation=landscape"
                                        alt="Eco-Friendly Packaging"
                                        className="w-full h-64 object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Future Goals */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold tracking-wide mb-4">Our Sustainability Roadmap</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We're committed to continuous improvement in our sustainability journey.
                            Here's our plan for creating an even more positive impact in the coming years.
                        </p>
                    </div>
                    <div className="bg-[#F8F7F3] rounded-lg p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#ADC4A0] mb-2">2025</div>
                                <h3 className="text-xl font-semibold mb-4">Near-Term Goals</h3>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Achieve 100% renewable energy in all facilities</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Reduce water usage by an additional 15%</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Implement closed-loop recycling for all fabric waste</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-white rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">Progress</span>
                                        <span className="text-sm font-medium text-[#ADC4A0]">65%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#ADC4A0] h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#D88F70] mb-2">2027</div>
                                <h3 className="text-xl font-semibold mb-4">Mid-Term Vision</h3>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#D88F70] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Carbon-neutral operations across our entire supply chain</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#D88F70] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Zero waste to landfill from all manufacturing processes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#D88F70] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Expand regenerative cotton farming partnerships</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-white rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">Progress</span>
                                        <span className="text-sm font-medium text-[#D88F70]">40%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#D88F70] h-2 rounded-full" style={{ width: '40%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#6B8E9B] mb-2">2030</div>
                                <h3 className="text-xl font-semibold mb-4">Long-Term Ambition</h3>
                                <ul className="space-y-3 text-left">
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#6B8E9B] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Climate-positive operations that remove more carbon than we emit</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#6B8E9B] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Fully circular product lifecycle with take-back programs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-check-circle text-[#6B8E9B] mt-1 mr-2"></i>
                                        <span className="text-gray-700">Industry-leading transparency in supply chain practices</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-white rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600">Progress</span>
                                        <span className="text-sm font-medium text-[#6B8E9B]">25%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#6B8E9B] h-2 rounded-full" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="py-16 bg-[#ADC4A0] text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-6">Join Our Sustainable Journey</h2>
                        <p className="text-xl mb-8">
                            Together, we can make a positive impact on the planet. Learn more about our sustainability initiatives or partner with us to create a more sustainable future.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
                                <p className="mb-6">
                                    Subscribe to our newsletter to receive updates on our sustainability initiatives and new eco-friendly products.
                                </p>
                                <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="px-4 py-3 rounded-button border-none text-gray-800 w-full focus:ring-2 focus:ring-white/50 focus:outline-none"
                                        required
                                    />
                                    <button type="submit" className="px-6 py-3 bg-white text-[#ADC4A0] font-medium !rounded-button hover:bg-gray-100 transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Download Our Report</h3>
                                <p className="mb-6">
                                    Get our detailed sustainability report to learn more about our environmental impact and initiatives.
                                </p>
                                <div className="flex flex-col md:flex-row gap-3">
                                    <button className="px-6 py-3 bg-white text-[#ADC4A0] font-medium !rounded-button hover:bg-gray-100 transition-colors duration-400 flex-1 whitespace-nowrap cursor-pointer">
                                        <i className="fas fa-file-pdf mr-2"></i> 2024 Report
                                    </button>
                                    <button className="px-6 py-3 border-2 border-white text-white font-medium !rounded-button hover:bg-white/20 transition-colors duration-400 flex-1 whitespace-nowrap cursor-pointer">
                                        <i className="fas fa-envelope mr-2"></i> Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
};
export default App
