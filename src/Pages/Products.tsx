// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeMaterial, setActiveMaterial] = useState('all');
    const [activeColor, setActiveColor] = useState('all');
    const [activeSize, setActiveSize] = useState('all');
    const [activeSustainability, setActiveSustainability] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    // Filter dropdowns state
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [materialDropdown, setMaterialDropdown] = useState(false);
    const [colorDropdown, setColorDropdown] = useState(false);
    const [sizeDropdown, setSizeDropdown] = useState(false);
    const [sustainabilityDropdown, setSustainabilityDropdown] = useState(false);
    const [sortDropdown, setSortDropdown] = useState(false);
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
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, activeMaterial, activeColor, activeSize, activeSustainability, sortBy]);
    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.dropdown-container')) {
                setCategoryDropdown(false);
                setMaterialDropdown(false);
                setColorDropdown(false);
                setSizeDropdown(false);
                setSustainabilityDropdown(false);
                setSortDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const products = [
        {
            id: 1,
            name: "Premium Cotton Crew Neck T-Shirt",
            category: "t-shirts",
            description: "Classic crew neck t-shirt made from premium combed cotton for superior comfort and durability.",
            features: ["Pre-shrunk fabric", "Double-stitched hems", "Reinforced shoulder seams", "Tagless neck label"],
            material: "100% Organic Combed Cotton, 180 GSM",
            colors: ["White", "Black", "Navy", "Gray", "Maroon"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            minOrder: 100,
            sustainability: ["organic", "fair-trade"],
            image: "https://readdy.ai/api/search-image?query=premium%2520white%2520cotton%2520t-shirt%2520on%2520minimalist%2520beige%2520background%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520showing%2520fabric%2520texture%2520and%2520quality%2520stitching%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=5&orientation=portrait"
        },
        {
            id: 2,
            name: "Heavyweight Polo Shirt",
            category: "polos",
            description: "Professional-grade polo shirt with a structured fit and durable construction for corporate wear.",
            features: ["3-button placket", "Ribbed collar", "Side vents", "Reinforced seams"],
            material: "65% Cotton, 35% Polyester Pique, 220 GSM",
            colors: ["White", "Black", "Navy", "Sky Blue", "Forest Green"],
            sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
            minOrder: 50,
            sustainability: [],
            image: "https://readdy.ai/api/search-image?query=professional%2520navy%2520blue%2520polo%2520shirt%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520collar%2520and%2520buttons%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=6&orientation=portrait"
        },
        {
            id: 3,
            name: "Zip-Up Hoodie with Kangaroo Pocket",
            category: "hoodies",
            description: "Comfortable full-zip hoodie with brushed interior for warmth and softness.",
            features: ["Full metal zipper", "Double-layered hood", "Kangaroo pocket", "Ribbed cuffs and hem"],
            material: "80% Cotton, 20% Polyester Fleece, 320 GSM",
            colors: ["Gray Melange", "Black", "Navy", "Burgundy"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            minOrder: 50,
            sustainability: ["recycled"],
            image: "https://readdy.ai/api/search-image?query=gray%2520zip-up%2520hoodie%2520with%2520kangaroo%2520pocket%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520zipper%2520and%2520hood%2520details%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=7&orientation=portrait"
        },
        {
            id: 4,
            name: "Industrial Work Shirt",
            category: "workwear",
            description: "Durable work shirt designed for industrial environments with reinforced stress points.",
            features: ["Chest pockets", "Pen slot", "Reinforced elbows", "Stain-resistant finish"],
            material: "60% Cotton, 40% Polyester Twill, 240 GSM",
            colors: ["Navy", "Khaki", "Gray", "Black"],
            sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
            minOrder: 25,
            sustainability: [],
            image: "https://readdy.ai/api/search-image?query=industrial%2520navy%2520work%2520shirt%2520with%2520chest%2520pockets%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520durable%2520construction%2520and%2520utility%2520features%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=8&orientation=portrait"
        },
        {
            id: 5,
            name: "Custom Embroidered Polo",
            category: "custom-orders",
            description: "Premium polo shirts with custom embroidery options for corporate branding.",
            features: ["Custom logo embroidery", "Color matching available", "Multiple placement options", "Sample approval process"],
            material: "100% Combed Cotton Pique, 200 GSM",
            colors: ["Custom color matching available"],
            sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
            minOrder: 100,
            sustainability: ["organic"],
            image: "https://readdy.ai/api/search-image?query=premium%2520white%2520polo%2520shirt%2520with%2520embroidered%2520logo%2520on%2520chest%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520embroidery%2520detail%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=9&orientation=portrait"
        },
        {
            id: 6,
            name: "Organic Cotton V-Neck T-Shirt",
            category: "t-shirts",
            description: "Soft and sustainable v-neck t-shirt made from GOTS certified organic cotton.",
            features: ["V-neck design", "Enzyme-washed for softness", "Taped neck and shoulders", "Eco-friendly dyes"],
            material: "100% GOTS Certified Organic Cotton, 160 GSM",
            colors: ["White", "Black", "Sage Green", "Dusty Blue", "Heather Gray"],
            sizes: ["XS", "S", "M", "L", "XL"],
            minOrder: 100,
            sustainability: ["organic", "fair-trade", "recycled"],
            image: "https://readdy.ai/api/search-image?query=organic%2520cotton%2520v-neck%2520t-shirt%2520in%2520sage%2520green%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520v-neck%2520detail%2520and%2520soft%2520fabric%2520texture%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=10&orientation=portrait"
        },
        {
            id: 7,
            name: "Performance Pique Polo",
            category: "polos",
            description: "Moisture-wicking polo shirt designed for comfort in active environments.",
            features: ["Moisture-wicking fabric", "Anti-microbial treatment", "UPF 30+ protection", "No-curl collar"],
            material: "60% Cotton, 40% Polyester Performance Pique, 180 GSM",
            colors: ["White", "Black", "Navy", "Red", "Royal Blue"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            minOrder: 50,
            sustainability: ["recycled"],
            image: "https://readdy.ai/api/search-image?query=performance%2520pique%2520polo%2520shirt%2520in%2520royal%2520blue%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520moisture-wicking%2520fabric%2520texture%2520and%2520no-curl%2520collar%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=11&orientation=portrait"
        },
        {
            id: 8,
            name: "Pullover Hoodie with Printed Design",
            category: "hoodies",
            description: "Cozy pullover hoodie with options for custom screen printing on front, back, and sleeves.",
            features: ["Double-layered hood", "Front pouch pocket", "Custom printing options", "Heavy-duty drawcords"],
            material: "70% Cotton, 30% Polyester Fleece, 300 GSM",
            colors: ["Black", "Navy", "Gray Melange", "Forest Green", "Burgundy"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            minOrder: 50,
            sustainability: [],
            image: "https://readdy.ai/api/search-image?query=black%2520pullover%2520hoodie%2520with%2520front%2520pouch%2520pocket%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520hood%2520and%2520drawcords%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=12&orientation=portrait"
        },
        {
            id: 9,
            name: "High-Visibility Safety T-Shirt",
            category: "workwear",
            description: "ANSI-compliant high-visibility t-shirt with reflective tape for safety in low-light conditions.",
            features: ["ANSI Class 2 compliant", "360° reflective tape", "Moisture-wicking", "Quick-dry technology"],
            material: "100% Polyester Bird-Eye Mesh, 140 GSM",
            colors: ["Hi-Vis Yellow", "Hi-Vis Orange"],
            sizes: ["M", "L", "XL", "XXL", "3XL"],
            minOrder: 25,
            sustainability: [],
            image: "https://readdy.ai/api/search-image?query=high-visibility%2520safety%2520t-shirt%2520in%2520bright%2520yellow%2520with%2520reflective%2520tape%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520reflective%2520details%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=13&orientation=portrait"
        },
        {
            id: 10,
            name: "Custom Printed Promotional T-Shirt",
            category: "custom-orders",
            description: "Budget-friendly t-shirts for events, promotions, and giveaways with custom printing options.",
            features: ["Full-color digital printing", "Multiple print locations", "Bulk pricing available", "Quick turnaround"],
            material: "50% Cotton, 50% Polyester, 150 GSM",
            colors: ["White", "Black", "Navy", "Red", "Royal Blue", "Gray"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            minOrder: 200,
            sustainability: [],
            image: "https://readdy.ai/api/search-image?query=white%2520promotional%2520t-shirt%2520with%2520colorful%2520print%2520on%2520chest%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520print%2520detail%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=14&orientation=portrait"
        },
        {
            id: 11,
            name: "Long Sleeve Henley T-Shirt",
            category: "t-shirts",
            description: "Stylish long sleeve henley with button placket and comfortable fit.",
            features: ["3-button placket", "Ribbed cuffs", "Contoured side seams", "Pre-washed for reduced shrinkage"],
            material: "95% Cotton, 5% Elastane, 200 GSM",
            colors: ["Navy", "Gray Melange", "Olive", "Burgundy", "Black"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            minOrder: 100,
            sustainability: [],
            image: "https://readdy.ai/api/search-image?query=navy%2520long%2520sleeve%2520henley%2520t-shirt%2520with%2520button%2520placket%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520placket%2520and%2520cuff%2520details%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=15&orientation=portrait"
        },
        {
            id: 12,
            name: "Contrast Collar Polo Shirt",
            category: "polos",
            description: "Sophisticated polo with contrast collar and cuffs for a premium look.",
            features: ["Contrast collar and cuffs", "Pearl buttons", "Split hem", "Longer back panel"],
            material: "100% Combed Cotton Pique, 220 GSM",
            colors: ["Navy/White", "Black/Gray", "White/Navy", "Burgundy/Navy"],
            sizes: ["S", "M", "L", "XL", "XXL"],
            minOrder: 50,
            sustainability: ["organic"],
            image: "https://readdy.ai/api/search-image?query=navy%2520polo%2520shirt%2520with%2520white%2520contrast%2520collar%2520and%2520cuffs%2520on%2520minimalist%2520beige%2520background%252C%2520showing%2520contrast%2520details%2520and%2520pearl%2520buttons%252C%2520professional%2520product%2520photography%252C%2520soft%2520natural%2520lighting%252C%2520high%2520resolution%252C%2520clean%2520composition%252C%2520commercial%2520apparel%2520photography&width=600&height=800&seq=16&orientation=portrait"
        }
    ];
    // Filter products based on active filters
    const filteredProducts = products.filter(product => {
        return (
            (activeCategory === 'all' || product.category === activeCategory) &&
            (activeMaterial === 'all' || product.material.toLowerCase().includes(activeMaterial.toLowerCase())) &&
            (activeColor === 'all' || product.colors.some(color => color.toLowerCase().includes(activeColor.toLowerCase()))) &&
            (activeSize === 'all' || product.sizes.includes(activeSize)) &&
            (activeSustainability === 'all' || product.sustainability.includes(activeSustainability))
        );
    });
    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'newest') {
            return b.id - a.id;
        } else if (sortBy === 'popular') {
            // For demo purposes, we'll just use ID as a proxy for popularity
            return a.id - b.id;
        }
        return 0;
    });
    // Pagination
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const paginate = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    // Get category title and description
    const getCategoryInfo = () => {
        switch (activeCategory) {
            case 't-shirts':
                return {
                    title: 'T-Shirts',
                    description: 'Premium quality t-shirts available in various styles, weights, and finishes. Perfect for everyday wear, promotions, or custom branding.',
                    count: filteredProducts.length
                };
            case 'polos':
                return {
                    title: 'Polo Shirts',
                    description: 'Professional polo shirts with superior comfort and durability. Ideal for corporate uniforms, events, and branded merchandise.',
                    count: filteredProducts.length
                };
            case 'hoodies':
                return {
                    title: 'Hoodies & Sweatshirts',
                    description: 'Comfortable hoodies and sweatshirts in various weights and styles. Perfect for cooler weather, casual wear, and promotional campaigns.',
                    count: filteredProducts.length
                };
            case 'workwear':
                return {
                    title: 'Workwear',
                    description: 'Durable and functional workwear designed for various industrial environments. Built to withstand tough conditions while maintaining comfort.',
                    count: filteredProducts.length
                };
            case 'custom-orders':
                return {
                    title: 'Custom Orders',
                    description: 'Tailor-made garments designed to your exact specifications. Custom fabrics, cuts, colors, and branding options available.',
                    count: filteredProducts.length
                };
            default:
                return {
                    title: 'All Products',
                    description: 'Browse our complete collection of premium cotton garments. Filter by category, material, and other specifications to find the perfect products for your needs.',
                    count: filteredProducts.length
                };
        }
    };
    const categoryInfo = getCategoryInfo();
    return (
        <div className="min-h-screen font-sans bg-[#F8F7F3] text-gray-800">
            {/* Navigation */}
            {/* <nav className={`fixed w-full z-50 transition-all duration-400 ${isScrolled ? 'bg-[#F8F7F3] shadow-sm' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-semibold tracking-wider">
                            <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/fca624f7-a846-4363-83f3-888cf01bb799" data-readdy="true" className="cursor-pointer">
                                <span className="text-[#D88F70]">Om</span> <span className="text-gray-800">Cottons</span>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/fca624f7-a846-4363-83f3-888cf01bb799" data-readdy="true" className="hover:text-[#D88F70] transition-colors duration-400 tracking-wide cursor-pointer">Home</a>
                            <a href="#" className="text-[#D88F70] font-medium transition-colors duration-400 tracking-wide cursor-pointer">Products</a>
                            <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/3ed2e05a-6169-4d0b-9a19-4fa7cad8b6be" data-readdy="true" className="hover:text-[#D88F70] transition-colors duration-400 tracking-wide cursor-pointer">Sustainability</a>
                            <a href="#" className="hover:text-[#D88F70] transition-colors duration-400 tracking-wide cursor-pointer">About</a>
                            <a href="#" className="hover:text-[#D88F70] transition-colors duration-400 tracking-wide cursor-pointer">Contact</a>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="px-5 py-2 bg-[#ADC4A0] text-white rounded-button hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">Request Samples</button>
                            <button className="px-5 py-2 border border-[#D88F70] text-[#D88F70] rounded-button hover:bg-[#D88F70] hover:text-white transition-colors duration-400 whitespace-nowrap cursor-pointer">Book a Call</button>
                        </div>
                        <div className="md:hidden cursor-pointer">
                            <i className="fas fa-bars text-xl"></i>
                        </div>
                    </div>
                </div>
            </nav> */}
            <Navbar />
            {/* Page Header */}
            <div className="pt-24 pb-8 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex items-center mb-4">
                        <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/fca624f7-a846-4363-83f3-888cf01bb799" data-readdy="true" className="text-gray-500 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer">
                            <i className="fas fa-home mr-2"></i>Home
                        </a>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-[#D88F70]">Products</span>
                    </div>
                    <h1 className="text-4xl font-semibold tracking-wide mb-2">Our Products</h1>
                    <p className="text-gray-600 max-w-3xl">
                        Discover our premium cotton garments crafted with quality, sustainability, and attention to detail.
                        Browse our collections or use the filters to find the perfect products for your brand.
                    </p>
                </div>
            </div>
            {/* Filter Bar */}
            <div className="sticky top-16 z-40 bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center text-gray-700 hover:text-[#D88F70] transition-colors duration-400 mr-6 cursor-pointer"
                            >
                                <i className="fas fa-sliders-h mr-2"></i>
                                <span className="font-medium">Filters</span>
                                <i className={`fas fa-chevron-${showFilters ? 'up' : 'down'} ml-2 text-sm`}></i>
                            </button>
                            <span className="text-gray-500">{filteredProducts.length} products</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative dropdown-container">
                                <button
                                    onClick={() => setSortDropdown(!sortDropdown)}
                                    className="flex items-center text-gray-700 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <i className="fas fa-sort mr-2"></i>
                                    <span>Sort by: <span className="font-medium">{sortBy === 'newest' ? 'Newest' : 'Popular'}</span></span>
                                    <i className={`fas fa-chevron-${sortDropdown ? 'up' : 'down'} ml-2 text-sm`}></i>
                                </button>
                                {sortDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <button
                                                onClick={() => {
                                                    setSortBy('newest');
                                                    setSortDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'newest' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Newest
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setSortBy('popular');
                                                    setSortDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${sortBy === 'popular' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Popular
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Expanded Filters */}
                    {showFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6 pb-2">
                            {/* Category Filter */}
                            <div className="relative dropdown-container">
                                <button
                                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button text-gray-700 bg-white hover:border-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <span>Category: <span className="font-medium">{activeCategory === 'all' ? 'All' : getCategoryInfo().title}</span></span>
                                    <i className={`fas fa-chevron-${categoryDropdown ? 'up' : 'down'} ml-2 text-sm`}></i>
                                </button>
                                {categoryDropdown && (
                                    <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <button
                                                onClick={() => {
                                                    setActiveCategory('all');
                                                    setCategoryDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === 'all' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                All Categories
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveCategory('t-shirts');
                                                    setCategoryDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === 't-shirts' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                T-Shirts
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveCategory('polos');
                                                    setCategoryDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === 'polos' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Polo Shirts
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveCategory('hoodies');
                                                    setCategoryDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === 'hoodies' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Hoodies & Sweatshirts
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveCategory('workwear');
                                                    setCategoryDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === 'workwear' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Workwear
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveCategory('custom-orders');
                                                    setCategoryDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeCategory === 'custom-orders' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Custom Orders
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Material Filter */}
                            <div className="relative dropdown-container">
                                <button
                                    onClick={() => setMaterialDropdown(!materialDropdown)}
                                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button text-gray-700 bg-white hover:border-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <span>Material: <span className="font-medium">{activeMaterial === 'all' ? 'All' : activeMaterial}</span></span>
                                    <i className={`fas fa-chevron-${materialDropdown ? 'up' : 'down'} ml-2 text-sm`}></i>
                                </button>
                                {materialDropdown && (
                                    <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <button
                                                onClick={() => {
                                                    setActiveMaterial('all');
                                                    setMaterialDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeMaterial === 'all' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                All Materials
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveMaterial('organic');
                                                    setMaterialDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeMaterial === 'organic' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Organic Cotton
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveMaterial('combed');
                                                    setMaterialDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeMaterial === 'combed' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Combed Cotton
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveMaterial('polyester');
                                                    setMaterialDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeMaterial === 'polyester' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Cotton/Polyester Blend
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Color Filter */}
                            <div className="relative dropdown-container">
                                <button
                                    onClick={() => setColorDropdown(!colorDropdown)}
                                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button text-gray-700 bg-white hover:border-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <span>Color: <span className="font-medium">{activeColor === 'all' ? 'All' : activeColor}</span></span>
                                    <i className={`fas fa-chevron-${colorDropdown ? 'up' : 'down'} ml-2 text-sm`}></i>
                                </button>
                                {colorDropdown && (
                                    <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <button
                                                onClick={() => {
                                                    setActiveColor('all');
                                                    setColorDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeColor === 'all' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                All Colors
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveColor('white');
                                                    setColorDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeColor === 'white' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                White
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveColor('black');
                                                    setColorDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeColor === 'black' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Black
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveColor('navy');
                                                    setColorDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeColor === 'navy' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Navy
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveColor('gray');
                                                    setColorDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeColor === 'gray' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Gray
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Size Filter */}
                            <div className="relative dropdown-container">
                                <button
                                    onClick={() => setSizeDropdown(!sizeDropdown)}
                                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button text-gray-700 bg-white hover:border-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <span>Size: <span className="font-medium">{activeSize === 'all' ? 'All' : activeSize}</span></span>
                                    <i className={`fas fa-chevron-${sizeDropdown ? 'up' : 'down'} ml-2 text-sm`}></i>
                                </button>
                                {sizeDropdown && (
                                    <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <button
                                                onClick={() => {
                                                    setActiveSize('all');
                                                    setSizeDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSize === 'all' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                All Sizes
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSize('XS');
                                                    setSizeDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSize === 'XS' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                XS
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSize('S');
                                                    setSizeDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSize === 'S' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                S
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSize('M');
                                                    setSizeDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSize === 'M' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                M
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSize('L');
                                                    setSizeDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSize === 'L' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                L
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSize('XL');
                                                    setSizeDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSize === 'XL' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                XL
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSize('XXL');
                                                    setSizeDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSize === 'XXL' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                XXL
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* Sustainability Filter */}
                            <div className="relative dropdown-container">
                                <button
                                    onClick={() => setSustainabilityDropdown(!sustainabilityDropdown)}
                                    className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-button text-gray-700 bg-white hover:border-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <span>Sustainability: <span className="font-medium">{activeSustainability === 'all' ? 'All' : activeSustainability}</span></span>
                                    <i className={`fas fa-chevron-${sustainabilityDropdown ? 'up' : 'down'} ml-2 text-sm`}></i>
                                </button>
                                {sustainabilityDropdown && (
                                    <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
                                        <div className="py-1">
                                            <button
                                                onClick={() => {
                                                    setActiveSustainability('all');
                                                    setSustainabilityDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSustainability === 'all' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                All Products
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSustainability('organic');
                                                    setSustainabilityDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSustainability === 'organic' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Organic
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSustainability('fair-trade');
                                                    setSustainabilityDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSustainability === 'fair-trade' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Fair Trade
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setActiveSustainability('recycled');
                                                    setSustainabilityDropdown(false);
                                                }}
                                                className={`block px-4 py-2 text-sm w-full text-left ${activeSustainability === 'recycled' ? 'bg-gray-100 text-[#D88F70]' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                Recycled Materials
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Category Header */}
            <section className="py-12 bg-[#F8F7F3]">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-semibold tracking-wide mb-4">{categoryInfo.title}</h2>
                        <p className="text-gray-600 mb-4">{categoryInfo.description}</p>
                        <div className="flex items-center">
                            <span className="bg-[#E7DFD2] text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                {categoryInfo.count} {categoryInfo.count === 1 ? 'product' : 'products'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    {currentProducts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-400 group">
                                    <div className="relative overflow-hidden h-80">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {product.sustainability.length > 0 && (
                                            <div className="absolute top-4 right-4 flex space-x-2">
                                                {product.sustainability.includes('organic') && (
                                                    <div className="bg-[#ADC4A0] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Organic">
                                                        <i className="fas fa-seedling"></i>
                                                    </div>
                                                )}
                                                {product.sustainability.includes('fair-trade') && (
                                                    <div className="bg-[#D88F70] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Fair Trade">
                                                        <i className="fas fa-handshake"></i>
                                                    </div>
                                                )}
                                                {product.sustainability.includes('recycled') && (
                                                    <div className="bg-[#6B8E9B] text-white rounded-full w-8 h-8 flex items-center justify-center" title="Recycled Materials">
                                                        <i className="fas fa-recycle"></i>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                            <button className="w-full bg-white text-gray-800 py-2 rounded-button font-medium hover:bg-gray-100 transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                                Quick View
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Features</h4>
                                            <ul className="space-y-1">
                                                {product.features.map((feature, index) => (
                                                    <li key={index} className="text-gray-600 text-sm flex items-start">
                                                        <i className="fas fa-check text-[#ADC4A0] mt-1 mr-2"></i>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Material</h4>
                                            <p className="text-gray-600 text-sm">{product.material}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {product.colors.length > 0 && product.colors[0] !== "Custom color matching available" && (
                                                <div className="flex items-center">
                                                    <span className="text-xs font-medium text-gray-500 mr-2">Colors:</span>
                                                    <div className="flex space-x-1">
                                                        {product.colors.slice(0, 5).map((color, index) => {
                                                            let bgColor;
                                                            switch (color.toLowerCase()) {
                                                                case 'white': bgColor = 'bg-white border border-gray-300'; break;
                                                                case 'black': bgColor = 'bg-black'; break;
                                                                case 'navy': bgColor = 'bg-blue-900'; break;
                                                                case 'gray': case 'gray melange': bgColor = 'bg-gray-500'; break;
                                                                case 'maroon': case 'burgundy': bgColor = 'bg-red-800'; break;
                                                                case 'sky blue': bgColor = 'bg-blue-300'; break;
                                                                case 'forest green': case 'olive': bgColor = 'bg-green-800'; break;
                                                                case 'red': bgColor = 'bg-red-600'; break;
                                                                case 'royal blue': bgColor = 'bg-blue-600'; break;
                                                                case 'khaki': bgColor = 'bg-yellow-200'; break;
                                                                case 'sage green': bgColor = 'bg-green-300'; break;
                                                                case 'dusty blue': bgColor = 'bg-blue-200'; break;
                                                                case 'heather gray': bgColor = 'bg-gray-400'; break;
                                                                case 'hi-vis yellow': bgColor = 'bg-yellow-300'; break;
                                                                case 'hi-vis orange': bgColor = 'bg-orange-400'; break;
                                                                default: bgColor = 'bg-gray-200'; break;
                                                            }
                                                            return (
                                                                <div
                                                                    key={index}
                                                                    className={`w-4 h-4 rounded-full ${bgColor}`}
                                                                    title={color}
                                                                ></div>
                                                            );
                                                        })}
                                                        {product.colors.length > 5 && (
                                                            <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                                                                +{product.colors.length - 5}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                            {product.colors.length > 0 && product.colors[0] === "Custom color matching available" && (
                                                <div className="text-xs font-medium text-gray-500">
                                                    <i className="fas fa-palette mr-1"></i> Custom color matching available
                                                </div>
                                            )}
                                            <div className="flex items-center">
                                                <span className="text-xs font-medium text-gray-500 mr-2">Sizes:</span>
                                                <div className="text-xs text-gray-600">{product.sizes.join(', ')}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-xs font-medium text-gray-500">
                                                <i className="fas fa-box mr-1"></i> Min. Order: {product.minOrder} pcs
                                            </div>
                                        </div>
                                        <button className="w-full bg-[#ADC4A0] text-white py-2 rounded-button font-medium hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                            Request Sample
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-5xl text-gray-300 mb-4">
                                <i className="fas fa-search"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">No products found</h3>
                            <p className="text-gray-600">
                                Try adjusting your filters to find what you're looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setActiveCategory('all');
                                    setActiveMaterial('all');
                                    setActiveColor('all');
                                    setActiveSize('all');
                                    setActiveSustainability('all');
                                }}
                                className="mt-4 px-6 py-2 bg-[#D88F70] text-white rounded-button hover:bg-[#C67E60] transition-colors duration-400 whitespace-nowrap cursor-pointer"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                    {/* Pagination */}
                    {sortedProducts.length > itemsPerPage && (
                        <div className="mt-12 flex justify-center">
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 cursor-pointer'}`}
                                >
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                    <button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === number ? 'bg-[#D88F70] text-white' : 'text-gray-700 hover:bg-gray-100'} cursor-pointer`}
                                    >
                                        {number}
                                    </button>
                                ))}
                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100 cursor-pointer'}`}
                                >
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-[#ADC4A0] text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide">Need Custom Solutions?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        We specialize in creating custom garments tailored to your exact specifications.
                        Contact our team to discuss your unique requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-8 py-3 bg-white text-[#ADC4A0] text-lg font-medium rounded-button hover:bg-gray-100 transition-colors duration-400 whitespace-nowrap cursor-pointer">
                            Request Custom Quote
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white text-lg font-medium rounded-button hover:bg-white hover:text-[#ADC4A0] transition-colors duration-400 whitespace-nowrap cursor-pointer">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    );
};
export default App
