// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import VinodImage from '../images/vinod-sharma.webp'
import CottonFields from "../images/cotton-fields.webp"

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('story');
    const [showModal, setShowModal] = useState(false);
    const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
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
    // Team member data
    interface TeamMember {
        id: number;
        name: string;
        position: string;
        bio: string;
        image: string;
        linkedin: string;
        twitter: string;
    }
    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Amrita Sharma',
            position: 'Founder & CEO',
            bio: '',
            image: 'https://media.licdn.com/dms/image/v2/D4E03AQGV7I9DxQtO_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687630542535?e=1753920000&v=beta&t=6OPKUxSgpz2ZeBcuzWbnJf7oVVmBo80VDpJbi-jJ4uw',
            linkedin: 'https://www.linkedin.com/in/amrittasharma/',
            twitter: '#'
        },
        {
            id: 2,
            name: 'Vinod Sharma',
            position: 'Director',
            bio: '',
            image: VinodImage,
            linkedin: 'https://www.linkedin.com/in/vinod-sharma-47088227/',
            twitter: '#'
        },
        {
            id: 3,
            name: 'Aditya Sharma',
            position: 'Technical Director',
            bio: '',
            image: 'https://media.licdn.com/dms/image/v2/C5603AQHg_AMvBtfwWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1660882356024?e=1753920000&v=beta&t=TeylR3CNDcFUEjG2NYYrsWYBHg1Uygi332mhoYx41DE',
            linkedin: 'https://www.linkedin.com/in/aditysharma17/',
            twitter: '#'
        },
    ];
    // Values data
    const values = [
        {
            icon: 'leaf',
            title: 'Environmental Stewardship',
            description: 'We prioritize practices that protect and regenerate natural resources, minimizing our environmental footprint.'
        },
        {
            icon: 'hands-helping',
            title: 'Social Responsibility',
            description: 'We ensure fair treatment, safe conditions, and living wages for everyone involved in creating our products.'
        },
        {
            icon: 'sync-alt',
            title: 'Circular Economy',
            description: 'We design products and processes that eliminate waste and continuously reuse resources.'
        },
        {
            icon: 'lightbulb',
            title: 'Innovation',
            description: 'We constantly seek new solutions to improve sustainability without compromising quality or design.'
        },
        {
            icon: 'users',
            title: 'Community Impact',
            description: 'We invest in the communities where we operate, supporting education and economic development.'
        },
        {
            icon: 'shield-alt',
            title: 'Transparency',
            description: 'We openly share information about our practices, supply chain, and environmental impact.'
        }
    ];
    const openTeamModal = (member: TeamMember) => {
        setSelectedTeamMember(member);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setSelectedTeamMember(null);
    };
    return (
        <div className="min-h-screen font-sans bg-[#F8F7F3] text-gray-800">
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=modern%2520sustainable%2520textile%2520company%2520headquarters%2520with%2520team%2520members%2520collaborating%2520in%2520bright%2520open%2520office%2520space%252C%2520natural%2520materials%252C%2520plants%252C%2520cotton%2520fabric%2520samples%2520visible%252C%2520warm%2520lighting%252C%2520professional%2520corporate%2520photography%252C%2520inspiring%2520workspace&width=1440&height=600&seq=111&orientation=landscape"
                        alt="Om Cottons Headquarters"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-800">Our Story</h1>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Launched recently, Om Cottons is a new chapter from a legacy of 25+ years in the cashmere industry. Rooted in tradition and driven by innovation, we’re now bringing the same commitment to quality and sustainability to cotton garments—proving that conscious fashion can still be timeless and stylish.
                        </p>
                    </div>
                </div>
            </section>
            {/* About Navigation */}
            <section className="bg-white sticky top-16 z-30 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto py-4 scrollbar-hide">
                        <button
                            onClick={() => setActiveTab('story')}
                            className={`px-5 py-2 whitespace-nowrap mr-4 font-medium transition-colors duration-300 !rounded-button cursor-pointer ${activeTab === 'story' ? 'bg-[#D88F70] text-white' : 'text-gray-600 hover:text-[#D88F70]'}`}
                        >
                            Our Story
                        </button>
                        <button
                            onClick={() => setActiveTab('mission')}
                            className={`px-5 py-2 whitespace-nowrap mr-4 font-medium transition-colors duration-300 !rounded-button cursor-pointer ${activeTab === 'mission' ? 'bg-[#D88F70] text-white' : 'text-gray-600 hover:text-[#D88F70]'}`}
                        >
                            Mission & Values
                        </button>
                        <button
                            onClick={() => setActiveTab('team')}
                            className={`px-5 py-2 whitespace-nowrap mr-4 font-medium transition-colors duration-300 !rounded-button cursor-pointer ${activeTab === 'team' ? 'bg-[#D88F70] text-white' : 'text-gray-600 hover:text-[#D88F70]'}`}
                        >
                            Our Team
                        </button>
                        <button
                            onClick={() => setActiveTab('culture')}
                            className={`px-5 py-2 whitespace-nowrap font-medium transition-colors duration-300 !rounded-button cursor-pointer ${activeTab === 'culture' ? 'bg-[#D88F70] text-white' : 'text-gray-600 hover:text-[#D88F70]'}`}
                        >
                            Company Culture
                        </button>
                    </div>
                </div>
            </section>
            {/* Our Story Content */}
            {activeTab === 'story' && (
                <section className="py-16 bg-[#F8F7F3]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-semibold mb-6">The Om Cottons Journey</h2>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Om Cottons was born from founder Priya Sharma's vision to transform the textile industry. After witnessing the environmental and social impact of conventional cotton production during her years working in the fashion industry, Priya decided to create a company that would do things differently.
                                </p>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Starting with a small workshop in Mumbai in 2010, we began producing limited quantities of organic cotton t-shirts. Our commitment to quality and sustainability quickly earned us a loyal customer base, allowing us to expand our product lines and reach.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Today, Om Cottons works with over 500 organic cotton farmers across India, supporting their transition to sustainable farming practices. Our products are sold in 30 countries, proving that ethical business can thrive on a global scale.
                                </p>
                                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-semibold mb-3 text-[#D88F70]">Our Name</h3>
                                    <p className="text-gray-700 italic">
                                        "Om" represents harmony and balance in ancient Indian philosophy—values that guide our approach to business. We seek harmony between tradition and innovation, between commerce and conservation, between people and planet.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <img
                                    src="https://readdy.ai/api/search-image?query=sustainable%2520cotton%2520clothing%2520workshop%2520in%2520India%252C%2520artisans%2520working%2520with%2520organic%2520cotton%2520fabric%252C%2520traditional%2520techniques%2520meeting%2520modern%2520design%252C%2520bright%2520colorful%2520textiles%252C%2520natural%2520lighting%252C%2520professional%2520documentary%2520photography&width=600&height=400&seq=112&orientation=landscape"
                                    alt="Om Cottons Early Workshop"
                                    className="w-full h-auto rounded-lg shadow-md object-cover"
                                />
                                <div className="grid grid-cols-2 gap-6">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=close%2520up%2520of%2520hands%2520working%2520with%2520organic%2520cotton%2520fabric%252C%2520detailed%2520textile%2520craftsmanship%252C%2520natural%2520materials%252C%2520warm%2520lighting%252C%2520professional%2520documentary%2520photography%252C%2520artisanal%2520quality&width=300&height=200&seq=113&orientation=landscape"
                                        alt="Cotton Craftsmanship"
                                        className="w-full h-48 rounded-lg shadow-md object-cover"
                                    />
                                    <img
                                        src="https://readdy.ai/api/search-image?query=modern%2520sustainable%2520fashion%2520retail%2520store%2520interior%2520with%2520organic%2520cotton%2520clothing%2520displays%252C%2520eco-friendly%2520design%252C%2520natural%2520materials%252C%2520warm%2520lighting%252C%2520professional%2520retail%2520photography&width=300&height=200&seq=114&orientation=landscape"
                                        alt="Om Cottons Store"
                                        className="w-full h-48 rounded-lg shadow-md object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Mission & Values Content */}
            {activeTab === 'mission' && (
                <section className="py-16 bg-[#F8F7F3]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
                                <div className="h-1 w-20 bg-[#D88F70] mb-6"></div>
                                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                    To craft exceptional cotton clothing that respects both people and the planet—proving that sustainable fashion and commercial success can thrive side by side.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    We are committed to reshaping the textile industry by promoting responsible practices that support ecosystems, uplift communities, and create garments with lasting value.
                                </p>
                                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                                <div className="h-1 w-20 bg-[#ADC4A0] mb-6"></div>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    A world where sustainable fashion is no longer the alternative, but the industry standard. Every garment should be created with care—for the Earth, for the artisans, and for future generations.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <img
                                    src={CottonFields}
                                    alt="Our Mission in Action"
                                    className="w-full h-auto rounded-lg mb-6"
                                />
                                <div className="p-6 bg-[#F8F7F3] rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-[#D88F70]">What Makes Om Cottons Different</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Direct collaboration with organic cotton suppliers GOTS Certified</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Full supply chain transparency, from seed to finished product</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Carbon-neutral production processes</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Innovative natural dyeing techniques</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Zero-waste design and circular economy principles</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-3xl font-semibold mb-12 text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-[#D88F70] rounded-full flex items-center justify-center mb-6 text-white text-2xl">
                                        <i className={`fas fa-${value.icon}`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                    <p className="text-gray-700">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* Team Content */}
            {activeTab === 'team' && (
                <section className="py-16 bg-[#F8F7F3]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Meet Our Leadership Team</h2>
                            <p className="text-gray-700 max-w-3xl mx-auto">
                                Our leadership blends deep expertise in sustainable textiles, ethical sourcing, business strategy, and design—guiding Om Cottons to set a new benchmark in responsible fashion.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer"
                                    onClick={() => openTeamModal(member)}
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                            <div className="flex space-x-3 mb-3">
                                                <a href={member.linkedin} target="_blank" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#D88F70] transition-colors duration-300">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                        <p className="text-[#D88F70]">{member.position}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-semibold mb-6 text-center">Our Extended Team</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#ADC4A0] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                                        <i className="fas fa-seedling"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Farming Partners</h4>
                                    <p className="text-gray-700">
                                        50+ organic cotton suppliers committed to environmentally responsible and pesticide-free cultivation.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#D88F70] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                                        <i className="fas fa-industry"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Production Team</h4>
                                    <p className="text-gray-700">
                                        150+ skilled artisans and production specialists in our ethical manufacturing facilities.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-[#6B8E9B] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Global Staff</h4>
                                    <p className="text-gray-700">
                                        50+ team members in sales, marketing, design, and customer support across 8 countries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Company Culture Content */}
            {activeTab === 'culture' && (
                <section className="py-16 bg-[#F8F7F3]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Life at Om Cottons</h2>
                            <p className="text-gray-700 max-w-3xl mx-auto">
                                At Om Cottons, we believe in a work culture rooted in purpose. Our team is empowered by collaboration, creativity, and a shared commitment to sustainability.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div>
                                <img
                                    src="https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520company%2520team%2520meeting%2520in%2520bright%2520modern%2520office%252C%2520diverse%2520group%2520of%2520professionals%2520collaborating%252C%2520eco-friendly%2520workspace%2520with%2520plants%252C%2520natural%2520materials%252C%2520cotton%2520samples%2520visible%252C%2520professional%2520corporate%2520photography&width=600&height=400&seq=116&orientation=landscape"
                                    alt="Team Collaboration"
                                    className="w-full h-80 object-cover rounded-lg shadow-md mb-8"
                                />
                                <div className="grid grid-cols-2 gap-8">
                                    <img
                                        src="https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520company%2520team%2520building%2520activity%2520outdoors%252C%2520diverse%2520group%2520planting%2520trees%252C%2520environmental%2520conservation%252C%2520teamwork%252C%2520bright%2520natural%2520lighting%252C%2520professional%2520documentary%2520photography&width=300&height=200&seq=117&orientation=landscape"
                                        alt="Team Building"
                                        className="w-full h-48 object-cover rounded-lg shadow-md"
                                    />
                                    <img
                                        src="https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520design%2520team%2520working%2520with%2520organic%2520cotton%2520fabrics%252C%2520creative%2520workspace%252C%2520designers%2520examining%2520textile%2520samples%252C%2520collaborative%2520environment%252C%2520bright%2520natural%2520lighting%252C%2520professional%2520documentary%2520photography&width=300&height=200&seq=118&orientation=landscape"
                                        alt="Design Team"
                                        className="w-full h-48 object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Our Work Philosophy</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-[#D88F70] rounded-full flex items-center justify-center text-white text-lg mr-4">
                                                <i className="fas fa-users"></i>
                                            </div>
                                            <h4 className="text-lg font-semibold">Inclusive & Collaborative:</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            Every voice matters, every idea counts.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-[#ADC4A0] rounded-full flex items-center justify-center text-white text-lg mr-4">
                                                <i className="fa-solid fa-arrow-up-right-dots"></i>
                                            </div>
                                            <h4 className="text-lg font-semibold">Growth-Oriented</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            We invest in learning, skill-building, and leadership.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-[#6B8E9B] rounded-full flex items-center justify-center text-white text-lg mr-4">
                                                <i className="fas fa-seedling"></i>
                                            </div>
                                            <h4 className="text-lg font-semibold">Sustainability-First</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            Eco-conscious thinking is embedded in every decision we make.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-8 text-center">A Glimpse of Our Workspace</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <img
                                src="https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520company%2520office%2520interior%252C%2520eco-friendly%2520workspace%2520with%2520plants%252C%2520natural%2520materials%252C%2520bright%2520open%2520space%252C%2520modern%2520design%252C%2520professional%2520interior%2520photography&width=300&height=300&seq=119&orientation=squarish"
                                alt="Office Space"
                                className="w-full h-64 object-cover rounded-lg shadow-sm"
                            />
                            <img
                                src="https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520company%2520textile%2520lab%252C%2520fabric%2520testing%2520area%252C%2520cotton%2520samples%252C%2520eco-friendly%2520workspace%252C%2520bright%2520natural%2520lighting%252C%2520professional%2520interior%2520photography&width=300&height=300&seq=120&orientation=squarish"
                                alt="Textile Lab"
                                className="w-full h-64 object-cover rounded-lg shadow-sm"
                            />
                            <img
                                src="https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520company%2520cafeteria%252C%2520team%2520members%2520having%2520lunch%252C%2520eco-friendly%2520space%2520with%2520plants%252C%2520natural%2520materials%252C%2520bright%2520open%2520area%252C%2520professional%2520interior%2520photography&width=300&height=300&seq=121&orientation=squarish"
                                alt="Company Cafeteria"
                                className="w-full h-64 object-cover rounded-lg shadow-sm"
                            />
                            <img
                                src="https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520company%2520showroom%252C%2520organic%2520cotton%2520clothing%2520displays%252C%2520eco-friendly%2520retail%2520space%252C%2520natural%2520materials%252C%2520warm%2520lighting%252C%2520professional%2520interior%2520photography&width=300&height=300&seq=122&orientation=squarish"
                                alt="Product Showroom"
                                className="w-full h-64 object-cover rounded-lg shadow-sm"
                            />
                        </div>
                    </div>
                </section>
            )}
            {/* Call to Action */}
            <section className="py-16 bg-[#D88F70] text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-6">Join Our Journey</h2>
                        <p className="text-xl mb-8">
                            Whether you're interested in our products, partnership opportunities, or joining our team, we'd love to connect with you.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a href="#" data-readdy="true" className="px-6 py-3 bg-white text-[#D88F70] font-medium !rounded-button hover:bg-gray-100 transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                <i className="fas fa-leaf mr-2"></i> Explore Our Sustainability
                            </a>
                            <button className="px-6 py-3 border-2 border-white text-white font-medium !rounded-button hover:bg-white/20 transition-colors duration-400 whitespace-nowrap cursor-pointer">
                                <i className="fas fa-briefcase mr-2"></i> View Career Opportunities
                            </button>
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
