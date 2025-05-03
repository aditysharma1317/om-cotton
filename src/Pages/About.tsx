// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
            name: 'Priya Sharma',
            position: 'Founder & CEO',
            bio: 'Priya founded Om Cottons in 2010 with a vision to revolutionize the cotton industry through sustainable practices. With over 15 years of experience in textile manufacturing, she leads our company with passion and purpose.',
            image: 'https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520Indian%2520female%2520CEO%2520in%2520her%252040s%2520wearing%2520sustainable%2520cotton%2520clothing%252C%2520confident%2520pose%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%252C%2520high%2520quality%2520corporate%2520photography%252C%2520soft%2520natural%2520colors&width=300&height=300&seq=101&orientation=squarish',
            linkedin: '#',
            twitter: '#'
        },
        {
            id: 2,
            name: 'Raj Patel',
            position: 'Head of Sustainability',
            bio: 'With a PhD in Environmental Science, Raj oversees all our sustainability initiatives. He has helped Om Cottons achieve numerous certifications and develop innovative eco-friendly manufacturing processes.',
            image: 'https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520Indian%2520male%2520sustainability%2520expert%2520in%2520his%252030s%2520wearing%2520sustainable%2520cotton%2520clothing%252C%2520confident%2520pose%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%252C%2520high%2520quality%2520corporate%2520photography%252C%2520soft%2520natural%2520colors&width=300&height=300&seq=102&orientation=squarish',
            linkedin: '#',
            twitter: '#'
        },
        {
            id: 3,
            name: 'Amara Chen',
            position: 'Creative Director',
            bio: 'Amara brings 12 years of fashion design experience to Om Cottons. Her innovative approach combines sustainability with contemporary aesthetics, creating products that are both eco-friendly and stylish.',
            image: 'https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520Asian%2520female%2520creative%2520director%2520in%2520her%252030s%2520wearing%2520stylish%2520sustainable%2520cotton%2520clothing%252C%2520artistic%2520pose%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%252C%2520high%2520quality%2520corporate%2520photography%252C%2520soft%2520natural%2520colors&width=300&height=300&seq=103&orientation=squarish',
            linkedin: '#',
            twitter: '#'
        },
        {
            id: 4,
            name: 'David Okafor',
            position: 'Operations Director',
            bio: 'David manages our global supply chain with expertise in ethical manufacturing. His leadership ensures that our production processes maintain the highest standards of quality and sustainability.',
            image: 'https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520African%2520male%2520operations%2520director%2520in%2520his%252040s%2520wearing%2520sustainable%2520cotton%2520clothing%252C%2520confident%2520pose%252C%2520neutral%2520background%252C%2520warm%2520lighting%252C%2520professional%2520headshot%252C%2520high%2520quality%2520corporate%2520photography%252C%2520soft%2520natural%2520colors&width=300&height=300&seq=104&orientation=squarish',
            linkedin: '#',
            twitter: '#'
        }
    ];
    // Milestones data
    const milestones = [
        {
            year: 2010,
            title: 'Foundation',
            description: 'Om Cottons was founded with a vision to create sustainable cotton garments that respect both people and planet.',
            image: 'https://readdy.ai/api/search-image?query=small%2520sustainable%2520clothing%2520startup%2520office%2520with%2520few%2520employees%2520working%2520in%2520bright%2520modern%2520space%252C%2520cotton%2520fabric%2520samples%2520visible%252C%2520eco-friendly%2520workspace%252C%2520plants%252C%2520natural%2520lighting%252C%2520professional%2520business%2520photography&width=400&height=300&seq=105&orientation=landscape'
        },
        {
            year: 2013,
            title: 'GOTS Certification',
            description: 'Achieved Global Organic Textile Standard certification, marking our commitment to organic and sustainable practices.',
            image: 'https://readdy.ai/api/search-image?query=sustainable%2520textile%2520certification%2520ceremony%252C%2520business%2520people%2520receiving%2520award%2520certificate%252C%2520professional%2520event%2520photography%252C%2520bright%2520indoor%2520setting%252C%2520corporate%2520milestone%2520celebration%252C%2520high%2520quality%2520documentary%2520image&width=400&height=300&seq=106&orientation=landscape'
        },
        {
            year: 2016,
            title: 'International Expansion',
            description: 'Expanded operations to Europe and North America, bringing sustainable Indian cotton to global markets.',
            image: 'https://readdy.ai/api/search-image?query=sustainable%2520fashion%2520showroom%2520in%2520European%2520city%252C%2520cotton%2520clothing%2520display%252C%2520international%2520business%2520expansion%252C%2520modern%2520retail%2520space%252C%2520eco-friendly%2520interior%2520design%252C%2520professional%2520retail%2520photography%252C%2520bright%2520natural%2520lighting&width=400&height=300&seq=107&orientation=landscape'
        },
        {
            year: 2019,
            title: 'Zero Waste Initiative',
            description: 'Implemented a zero-waste policy across all manufacturing facilities, with 95% of production waste now recycled or repurposed.',
            image: 'https://readdy.ai/api/search-image?query=sustainable%2520textile%2520factory%2520with%2520zero%2520waste%2520sorting%2520system%252C%2520workers%2520recycling%2520fabric%2520scraps%252C%2520eco-friendly%2520manufacturing%252C%2520modern%2520industrial%2520facility%252C%2520professional%2520industrial%2520photography%252C%2520bright%2520natural%2520lighting&width=400&height=300&seq=108&orientation=landscape'
        },
        {
            year: 2022,
            title: 'Carbon Neutral',
            description: 'Achieved carbon neutrality across all operations through renewable energy implementation and carbon offset programs.',
            image: 'https://readdy.ai/api/search-image?query=sustainable%2520textile%2520factory%2520with%2520solar%2520panels%2520on%2520roof%252C%2520eco-friendly%2520manufacturing%2520facility%252C%2520renewable%2520energy%2520in%2520industrial%2520setting%252C%2520modern%2520green%2520factory%252C%2520professional%2520industrial%2520photography%252C%2520bright%2520natural%2520lighting&width=400&height=300&seq=109&orientation=landscape'
        },
        {
            year: 2024,
            title: 'Regenerative Cotton Program',
            description: 'Launched our regenerative cotton farming initiative, partnering with farmers to implement practices that restore soil health and biodiversity.',
            image: 'https://readdy.ai/api/search-image?query=regenerative%2520cotton%2520farming%2520with%2520farmers%2520and%2520agricultural%2520experts%2520examining%2520healthy%2520cotton%2520plants%252C%2520sustainable%2520agriculture%252C%2520soil%2520health%2520focus%252C%2520rural%2520Indian%2520farm%2520setting%252C%2520professional%2520agricultural%2520photography%252C%2520natural%2520lighting&width=400&height=300&seq=110&orientation=landscape'
        }
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
                            <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/e5769924-a09c-4c36-a569-e98d273656bc" data-readdy="true" className="hover:text-[#D88F70] transition-colors duration-400 tracking-wide cursor-pointer">Products</a>
                            <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/3ed2e05a-6169-4d0b-9a19-4fa7cad8b6be" data-readdy="true" className="hover:text-[#D88F70] transition-colors duration-400 tracking-wide cursor-pointer">Sustainability</a>
                            <a href="#" className="text-[#D88F70] font-medium transition-colors duration-400 tracking-wide cursor-pointer">About</a>
                            <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/7a561bbd-6b25-4cfc-9942-9c0ac617001c" data-readdy="true" className="hover:text-[#D88F70] transition-colors duration-400 tracking-wide cursor-pointer">Contact</a>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="px-5 py-2 bg-[#ADC4A0] text-white !rounded-button hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">Request Samples</button>
                            <button className="px-5 py-2 border border-[#D88F70] text-[#D88F70] !rounded-button hover:bg-[#D88F70] hover:text-white transition-colors duration-400 whitespace-nowrap cursor-pointer">Book a Call</button>
                        </div>
                        <div className="md:hidden cursor-pointer">
                            <i className="fas fa-bars text-xl"></i>
                        </div>
                    </div>
                </div>
            </nav> */}
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
                            Founded in 2010, Om Cottons began with a simple vision: to create beautiful, high-quality cotton garments while respecting both people and planet. Today, we're a global leader in sustainable fashion, proving that style and sustainability can go hand in hand.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#ADC4A0] text-2xl mb-2">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">15 Years</h3>
                                <p className="text-gray-600 text-sm">Of sustainable innovation</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#D88F70] text-2xl mb-2">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">200+ Team</h3>
                                <p className="text-gray-600 text-sm">Passionate professionals</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#6B8E9B] text-2xl mb-2">
                                    <i className="fas fa-globe-asia"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">30 Countries</h3>
                                <p className="text-gray-600 text-sm">Global presence</p>
                            </div>
                        </div>
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
                            onClick={() => setActiveTab('milestones')}
                            className={`px-5 py-2 whitespace-nowrap mr-4 font-medium transition-colors duration-300 !rounded-button cursor-pointer ${activeTab === 'milestones' ? 'bg-[#D88F70] text-white' : 'text-gray-600 hover:text-[#D88F70]'}`}
                        >
                            Milestones
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
                                    To create exceptional cotton garments that honor both people and planet, demonstrating that sustainability and profitability can go hand in hand.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    We're committed to transforming the textile industry by proving that sustainable practices can produce superior products while supporting communities and regenerating natural resources.
                                </p>
                                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                                <div className="h-1 w-20 bg-[#ADC4A0] mb-6"></div>
                                <p className="text-xl text-gray-700 leading-relaxed">
                                    A world where sustainable fashion is the norm, not the exception—where every garment is made with respect for the earth and its people.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <img
                                    src="https://readdy.ai/api/search-image?query=sustainable%2520cotton%2520farmers%2520and%2520fashion%2520designers%2520collaborating%2520in%2520field%252C%2520examining%2520organic%2520cotton%2520plants%252C%2520diverse%2520team%252C%2520rural%2520Indian%2520setting%252C%2520bright%2520natural%2520lighting%252C%2520professional%2520documentary%2520photography%252C%2520inspiring%2520collaboration&width=600&height=400&seq=115&orientation=landscape"
                                    alt="Our Mission in Action"
                                    className="w-full h-auto rounded-lg mb-6"
                                />
                                <div className="p-6 bg-[#F8F7F3] rounded-lg">
                                    <h3 className="text-xl font-semibold mb-3 text-[#D88F70]">What Makes Us Different</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Direct partnerships with organic cotton farmers</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Transparent supply chain from seed to garment</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Carbon-neutral manufacturing processes</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Innovative natural dyeing techniques</span>
                                        </li>
                                        <li className="flex items-start">
                                            <i className="fas fa-check-circle text-[#ADC4A0] mt-1 mr-3"></i>
                                            <span className="text-gray-700">Zero-waste design philosophy</span>
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
                                Our diverse team brings together expertise in sustainable agriculture, textile manufacturing, design, and business management to create a company that leads by example.
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
                                                <a href={member.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#D88F70] transition-colors duration-300">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                                <a href={member.twitter} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#D88F70] transition-colors duration-300">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </div>
                                            <span className="text-white text-sm">Click to view bio</span>
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
                                        500+ organic cotton farmers across India who implement sustainable farming practices.
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
            {/* Milestones Content */}
            {activeTab === 'milestones' && (
                <section className="py-16 bg-[#F8F7F3]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-semibold mb-4">Our Journey & Milestones</h2>
                            <p className="text-gray-700 max-w-3xl mx-auto">
                                From our humble beginnings to becoming a global leader in sustainable fashion, each milestone represents our commitment to positive change.
                            </p>
                        </div>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#D88F70] transform -translate-x-1/2"></div>
                            <div className="space-y-24">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className={`md:grid md:grid-cols-2 md:gap-8 items-center ${index % 2 === 1 ? 'md:rtl' : ''}`}>
                                        <div className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} relative md:ltr`}>
                                            <div className="hidden md:block absolute top-1/2 w-4 h-4 rounded-full bg-[#D88F70] transform -translate-y-1/2 z-10">
                                                {index % 2 === 0 ? (
                                                    <div className="absolute right-0 transform translate-x-1/2"></div>
                                                ) : (
                                                    <div className="absolute left-0 transform -translate-x-1/2"></div>
                                                )}
                                            </div>
                                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                                <div className="text-3xl font-bold text-[#D88F70] mb-3">{milestone.year}</div>
                                                <h3 className="text-xl font-semibold mb-3">{milestone.title}</h3>
                                                <p className="text-gray-700">{milestone.description}</p>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg overflow-hidden shadow-sm md:ltr">
                                            <img
                                                src={milestone.image}
                                                alt={milestone.title}
                                                className="w-full h-64 object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-20 text-center">
                            <h3 className="text-2xl font-semibold mb-6">Recognition & Awards</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="w-16 h-16 mx-auto mb-4">
                                        <i className="fas fa-award text-[#D88F70] text-5xl"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Sustainable Business Award</h4>
                                    <p className="text-gray-700 mb-2">2023</p>
                                    <p className="text-gray-600 text-sm">
                                        Recognized for excellence in sustainable business practices by the Global Sustainability Alliance.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="w-16 h-16 mx-auto mb-4">
                                        <i className="fas fa-trophy text-[#ADC4A0] text-5xl"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Ethical Fashion Pioneer</h4>
                                    <p className="text-gray-700 mb-2">2021</p>
                                    <p className="text-gray-600 text-sm">
                                        Named "Ethical Fashion Pioneer" by Textile Innovation Forum for our regenerative cotton program.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="w-16 h-16 mx-auto mb-4">
                                        <i className="fas fa-medal text-[#6B8E9B] text-5xl"></i>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-2">Social Impact Award</h4>
                                    <p className="text-gray-700 mb-2">2019</p>
                                    <p className="text-gray-600 text-sm">
                                        Honored for our work supporting cotton farming communities and promoting fair labor practices.
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
                                Our culture is built on collaboration, innovation, and a shared commitment to sustainability. We believe that a positive work environment leads to positive impact.
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
                                                <i className="fas fa-balance-scale"></i>
                                            </div>
                                            <h4 className="text-lg font-semibold">Work-Life Balance</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            We promote flexible working arrangements and encourage our team to maintain a healthy balance between professional and personal life.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-[#ADC4A0] rounded-full flex items-center justify-center text-white text-lg mr-4">
                                                <i className="fas fa-lightbulb"></i>
                                            </div>
                                            <h4 className="text-lg font-semibold">Continuous Learning</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            We invest in our team's growth through regular training, workshops, and opportunities to learn new skills and explore innovative ideas.
                                        </p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-sm">
                                        <div className="flex items-center mb-4">
                                            <div className="w-10 h-10 bg-[#6B8E9B] rounded-full flex items-center justify-center text-white text-lg mr-4">
                                                <i className="fas fa-hands-helping"></i>
                                            </div>
                                            <h4 className="text-lg font-semibold">Community Engagement</h4>
                                        </div>
                                        <p className="text-gray-700">
                                            We encourage team members to participate in community service and sustainability initiatives, with paid volunteer time and company-sponsored projects.
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
                            <a href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/3ed2e05a-6169-4d0b-9a19-4fa7cad8b6be" data-readdy="true" className="px-6 py-3 bg-white text-[#D88F70] font-medium !rounded-button hover:bg-gray-100 transition-colors duration-400 whitespace-nowrap cursor-pointer">
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
            {/* Team Member Modal */}
            {showModal && selectedTeamMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-gray-800 hover:bg-[#D88F70] hover:text-white transition-colors duration-300 z-10 cursor-pointer"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                            <img
                                src={selectedTeamMember.image}
                                alt={selectedTeamMember.name}
                                className="w-full h-64 object-cover object-top"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-1">{selectedTeamMember.name}</h3>
                            <p className="text-[#D88F70] mb-4">{selectedTeamMember.position}</p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                {selectedTeamMember.bio}
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href={selectedTeamMember.linkedin}
                                    className="px-4 py-2 bg-[#0077B5] text-white rounded-full flex items-center !rounded-button cursor-pointer"
                                >
                                    <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
                                </a>
                                <a
                                    href={selectedTeamMember.twitter}
                                    className="px-4 py-2 bg-[#1DA1F2] text-white rounded-full flex items-center !rounded-button cursor-pointer"
                                >
                                    <i className="fab fa-twitter mr-2"></i> Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default App
