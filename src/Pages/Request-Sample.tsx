// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef } from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "United States",
        projectType: "Apparel",
        quantity: "",
        timeline: "",
        additionalNotes: "",
        preferredDeliveryDate: "",
        termsAgreed: false,
    });
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [bookingData, setBookingData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        topic: "General Consultation",
        description: "",
    });
    const [bookingErrors, setBookingErrors] = useState<{ [key: string]: string }>(
        {},
    );
    const formRef = useRef<HTMLFormElement>(null);
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        // Clear error when user types
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: "",
            });
        }
    };
    const handleFabricSelection = (fabricId: string) => {
        setSelectedFabrics((prevSelected) => {
            if (prevSelected.includes(fabricId)) {
                return prevSelected.filter((id) => id !== fabricId);
            } else {
                if (prevSelected.length < 5) {
                    return [...prevSelected, fabricId];
                }
                return prevSelected;
            }
        });
    };
    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        if (!formData.fullName.trim()) {
            errors.fullName = "Full name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
            errors.phone = "Phone number is required";
        }
        if (!formData.address.trim()) {
            errors.address = "Address is required";
        }
        if (!formData.city.trim()) {
            errors.city = "City is required";
        }
        if (!formData.state.trim()) {
            errors.state = "State/Province is required";
        }
        if (!formData.postalCode.trim()) {
            errors.postalCode = "Postal code is required";
        }
        if (selectedFabrics.length === 0) {
            errors.fabrics = "Please select at least one fabric sample";
        }
        if (!formData.termsAgreed) {
            errors.termsAgreed = "You must agree to the terms and conditions";
        }
        return errors;
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        // Form is valid, simulate submission
        setFormSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
            setFormData({
                fullName: "",
                companyName: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                state: "",
                postalCode: "",
                country: "United States",
                projectType: "Apparel",
                quantity: "",
                timeline: "",
                additionalNotes: "",
                preferredDeliveryDate: "",
                termsAgreed: false,
            });
            setSelectedFabrics([]);
            setFormSubmitted(false);
        }, 5000);
    };
    const fabricSamples = [
        {
            id: "organic-1",
            name: "Organic Cotton Jersey",
            category: "Organic Cotton",
            composition: "100% Organic Cotton",
            weight: "180 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20soft%20organic%20cotton%20jersey%20fabric%20with%20natural%20off-white%20color%20and%20subtle%20texture%2C%20high%20quality%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20weave%20visible&width=300&height=300&seq=101&orientation=squarish",
        },
        {
            id: "organic-2",
            name: "Organic Cotton Twill",
            category: "Organic Cotton",
            composition: "100% Organic Cotton",
            weight: "280 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20organic%20cotton%20twill%20fabric%20with%20visible%20diagonal%20weave%20pattern%2C%20natural%20beige%20color%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible&width=300&height=300&seq=102&orientation=squarish",
        },
        {
            id: "organic-3",
            name: "Organic Cotton Poplin",
            category: "Organic Cotton",
            composition: "100% Organic Cotton",
            weight: "120 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20lightweight%20organic%20cotton%20poplin%20fabric%20with%20smooth%20surface%20and%20tight%20weave%2C%20crisp%20white%20color%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible&width=300&height=300&seq=103&orientation=squarish",
        },
        {
            id: "blend-1",
            name: "Cotton-Linen Blend",
            category: "Blended Fabrics",
            composition: "70% Organic Cotton, 30% Linen",
            weight: "200 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20textured%20cotton-linen%20blend%20fabric%20with%20natural%20flecks%20and%20slubs%2C%20light%20beige%20color%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible&width=300&height=300&seq=104&orientation=squarish",
        },
        {
            id: "blend-2",
            name: "Cotton-Hemp Blend",
            category: "Blended Fabrics",
            composition: "60% Organic Cotton, 40% Hemp",
            weight: "220 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20durable%20cotton-hemp%20blend%20fabric%20with%20natural%20texture%20and%20visible%20fibers%2C%20earthy%20tan%20color%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20weave%20visible&width=300&height=300&seq=105&orientation=squarish",
        },
        {
            id: "blend-3",
            name: "Cotton-Bamboo Blend",
            category: "Blended Fabrics",
            composition: "70% Organic Cotton, 30% Bamboo",
            weight: "170 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20soft%20and%20silky%20cotton-bamboo%20blend%20fabric%20with%20subtle%20sheen%2C%20light%20gray%20color%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20drape%20visible&width=300&height=300&seq=106&orientation=squarish",
        },
        {
            id: "specialty-1",
            name: "Organic Denim",
            category: "Specialty Fabrics",
            composition: "98% Organic Cotton, 2% Elastane",
            weight: "340 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20organic%20denim%20fabric%20with%20classic%20blue%20color%20and%20visible%20twill%20weave%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible&width=300&height=300&seq=107&orientation=squarish",
        },
        {
            id: "specialty-2",
            name: "Organic Cotton Flannel",
            category: "Specialty Fabrics",
            composition: "100% Organic Cotton",
            weight: "220 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20soft%20brushed%20organic%20cotton%20flannel%20fabric%20with%20subtle%20plaid%20pattern%20in%20earth%20tones%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible&width=300&height=300&seq=108&orientation=squarish",
        },
        {
            id: "specialty-3",
            name: "Organic Cotton Canvas",
            category: "Specialty Fabrics",
            composition: "100% Organic Cotton",
            weight: "400 GSM",
            image:
                "https://readdy.ai/api/search-image?query=close%20up%20of%20heavy%20organic%20cotton%20canvas%20fabric%20with%20strong%20durable%20weave%2C%20natural%20unbleached%20color%2C%20sustainable%20textile%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20detailed%20fabric%20texture%20visible&width=300&height=300&seq=109&orientation=squarish",
        },
    ];
    return (
        <div className="min-h-screen font-sans bg-[#F8F7F3] text-gray-800">
            {/* Navigation */}
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=elegant%20arrangement%20of%20sustainable%20cotton%20fabric%20swatches%20in%20various%20natural%20colors%20and%20textures%2C%20with%20soft%20lighting%20creating%20a%20gradient%20effect%20from%20light%20left%20side%20to%20darker%20right%20side%2C%20professional%20product%20photography%20on%20neutral%20background%2C%20high%20quality%20detailed%20image&width=1440&height=600&seq=201&orientation=landscape"
                        alt="Fabric Samples"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-800">
                            Request Fabric Samples
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            Experience the quality of our sustainable cotton fabrics
                            firsthand. Request free samples to help you make informed
                            decisions for your next project.
                        </p>
                        <a
                            href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/7a561bbd-6b25-4cfc-9942-9c0ac617001c"
                            data-readdy="true"
                            className="inline-flex items-center text-[#D88F70] hover:text-[#C67E60] transition-colors duration-300 cursor-pointer"
                        >
                            <i className="fas fa-arrow-left mr-2"></i> Back to Contact Page
                        </a>
                    </div>
                </div>
            </section>
            {/* Sample Policy Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-8 text-center">
                        Our Sample Policy
                    </h2>
                    <div className="max-w-4xl mx-auto bg-[#F8F7F3] rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-start mb-6">
                                    <div className="text-[#D88F70] text-xl mt-1 mr-4">
                                        <i className="fas fa-ruler"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Sample Size</h3>
                                        <p className="text-gray-700">
                                            Each sample is approximately 15cm × 15cm (6" × 6"),
                                            allowing you to properly assess the fabric's quality,
                                            texture, and color.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="text-[#D88F70] text-xl mt-1 mr-4">
                                        <i className="fas fa-box"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Quantity Limits
                                        </h3>
                                        <p className="text-gray-700">
                                            You may request up to 5 different fabric samples per order
                                            to help you make the best decision for your project.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-[#D88F70] text-xl mt-1 mr-4">
                                        <i className="fas fa-sync-alt"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Return Policy
                                        </h3>
                                        <p className="text-gray-700">
                                            Samples are yours to keep. We encourage you to test them
                                            thoroughly to ensure they meet your requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start mb-6">
                                    <div className="text-[#D88F70] text-xl mt-1 mr-4">
                                        <i className="fas fa-truck"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Shipping</h3>
                                        <p className="text-gray-700">
                                            Sample shipping is free within India. International
                                            shipping is available at a nominal fee based on your
                                            location.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="text-[#D88F70] text-xl mt-1 mr-4">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Processing Time
                                        </h3>
                                        <p className="text-gray-700">
                                            Sample requests are processed within 1-2 business days and
                                            typically arrive within 3-7 business days depending on
                                            your location.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-[#D88F70] text-xl mt-1 mr-4">
                                        <i className="fas fa-info-circle"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            Additional Information
                                        </h3>
                                        <p className="text-gray-700">
                                            For bulk orders or custom sample requests, please contact
                                            our sales team directly at{" "}
                                            <span className="text-[#D88F70]">
                                                sales@omcottons.com
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Selection Grid */}
            <section className="py-16 bg-[#F8F7F3]">
                <div className="container mx-auto px-6">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-semibold mb-4">
                            Select Your Fabric Samples
                        </h2>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            Choose up to 5 fabric samples from our sustainable collection.
                            Each sample will help you experience the quality, texture, and
                            color firsthand.
                        </p>
                        <div className="mt-4 bg-white inline-flex items-center px-4 py-2 rounded-full shadow-sm">
                            <span className="text-gray-700 mr-2">Selected:</span>
                            <span className="text-[#D88F70] font-semibold">
                                {selectedFabrics.length}
                            </span>
                            <span className="text-gray-700 mx-1">/</span>
                            <span className="text-gray-700">5</span>
                        </div>
                        {formErrors.fabrics && (
                            <p className="text-red-500 text-sm mt-2">{formErrors.fabrics}</p>
                        )}
                    </div>
                    <div className="space-y-12">
                        {/* Organic Cotton */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                                Organic Cotton
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {fabricSamples
                                    .filter((fabric) => fabric.category === "Organic Cotton")
                                    .map((fabric) => (
                                        <div
                                            key={fabric.id}
                                            className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${selectedFabrics.includes(fabric.id)
                                                ? "ring-2 ring-[#D88F70]"
                                                : ""
                                                }`}
                                        >
                                            <div className="h-64 overflow-hidden">
                                                <img
                                                    src={fabric.image}
                                                    alt={fabric.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h4 className="text-lg font-semibold">
                                                        {fabric.name}
                                                    </h4>
                                                    <div
                                                        onClick={() => handleFabricSelection(fabric.id)}
                                                        className={`w-6 h-6 flex-shrink-0 border ${selectedFabrics.includes(fabric.id)
                                                            ? "bg-[#D88F70] border-[#D88F70] text-white"
                                                            : "border-gray-300"
                                                            } rounded cursor-pointer flex items-center justify-center transition-colors duration-200`}
                                                    >
                                                        {selectedFabrics.includes(fabric.id) && (
                                                            <i className="fas fa-check text-xs"></i>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-sm text-gray-600">
                                                    <p>
                                                        <span className="font-medium">Composition:</span>{" "}
                                                        {fabric.composition}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium">Weight:</span>{" "}
                                                        {fabric.weight}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => handleFabricSelection(fabric.id)}
                                                    className={`mt-4 w-full py-2 !rounded-button whitespace-nowrap cursor-pointer ${selectedFabrics.includes(fabric.id)
                                                        ? "bg-[#D88F70] text-white hover:bg-[#C67E60]"
                                                        : "border border-[#D88F70] text-[#D88F70] hover:bg-[#D88F70] hover:text-white"
                                                        } transition-colors duration-300`}
                                                >
                                                    {selectedFabrics.includes(fabric.id)
                                                        ? "Selected"
                                                        : "Select Sample"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {/* Blended Fabrics */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                                Blended Fabrics
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {fabricSamples
                                    .filter((fabric) => fabric.category === "Blended Fabrics")
                                    .map((fabric) => (
                                        <div
                                            key={fabric.id}
                                            className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${selectedFabrics.includes(fabric.id)
                                                ? "ring-2 ring-[#D88F70]"
                                                : ""
                                                }`}
                                        >
                                            <div className="h-64 overflow-hidden">
                                                <img
                                                    src={fabric.image}
                                                    alt={fabric.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h4 className="text-lg font-semibold">
                                                        {fabric.name}
                                                    </h4>
                                                    <div
                                                        onClick={() => handleFabricSelection(fabric.id)}
                                                        className={`w-6 h-6 flex-shrink-0 border ${selectedFabrics.includes(fabric.id)
                                                            ? "bg-[#D88F70] border-[#D88F70] text-white"
                                                            : "border-gray-300"
                                                            } rounded cursor-pointer flex items-center justify-center transition-colors duration-200`}
                                                    >
                                                        {selectedFabrics.includes(fabric.id) && (
                                                            <i className="fas fa-check text-xs"></i>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-sm text-gray-600">
                                                    <p>
                                                        <span className="font-medium">Composition:</span>{" "}
                                                        {fabric.composition}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium">Weight:</span>{" "}
                                                        {fabric.weight}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => handleFabricSelection(fabric.id)}
                                                    className={`mt-4 w-full py-2 !rounded-button whitespace-nowrap cursor-pointer ${selectedFabrics.includes(fabric.id)
                                                        ? "bg-[#D88F70] text-white hover:bg-[#C67E60]"
                                                        : "border border-[#D88F70] text-[#D88F70] hover:bg-[#D88F70] hover:text-white"
                                                        } transition-colors duration-300`}
                                                >
                                                    {selectedFabrics.includes(fabric.id)
                                                        ? "Selected"
                                                        : "Select Sample"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        {/* Specialty Fabrics */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-gray-200">
                                Specialty Fabrics
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {fabricSamples
                                    .filter((fabric) => fabric.category === "Specialty Fabrics")
                                    .map((fabric) => (
                                        <div
                                            key={fabric.id}
                                            className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md ${selectedFabrics.includes(fabric.id)
                                                ? "ring-2 ring-[#D88F70]"
                                                : ""
                                                }`}
                                        >
                                            <div className="h-64 overflow-hidden">
                                                <img
                                                    src={fabric.image}
                                                    alt={fabric.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h4 className="text-lg font-semibold">
                                                        {fabric.name}
                                                    </h4>
                                                    <div
                                                        onClick={() => handleFabricSelection(fabric.id)}
                                                        className={`w-6 h-6 flex-shrink-0 border ${selectedFabrics.includes(fabric.id)
                                                            ? "bg-[#D88F70] border-[#D88F70] text-white"
                                                            : "border-gray-300"
                                                            } rounded cursor-pointer flex items-center justify-center transition-colors duration-200`}
                                                    >
                                                        {selectedFabrics.includes(fabric.id) && (
                                                            <i className="fas fa-check text-xs"></i>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="space-y-2 text-sm text-gray-600">
                                                    <p>
                                                        <span className="font-medium">Composition:</span>{" "}
                                                        {fabric.composition}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium">Weight:</span>{" "}
                                                        {fabric.weight}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => handleFabricSelection(fabric.id)}
                                                    className={`mt-4 w-full py-2 !rounded-button whitespace-nowrap cursor-pointer ${selectedFabrics.includes(fabric.id)
                                                        ? "bg-[#D88F70] text-white hover:bg-[#C67E60]"
                                                        : "border border-[#D88F70] text-[#D88F70] hover:bg-[#D88F70] hover:text-white"
                                                        } transition-colors duration-300`}
                                                >
                                                    {selectedFabrics.includes(fabric.id)
                                                        ? "Selected"
                                                        : "Select Sample"}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Request Form */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-8 text-center">
                            Complete Your Sample Request
                        </h2>
                        {formSubmitted ? (
                            <div className="bg-[#ADC4A0]/20 p-8 rounded-lg border border-[#ADC4A0] mb-8">
                                <div className="flex items-center mb-4">
                                    <i className="fas fa-check-circle text-[#ADC4A0] text-2xl mr-3"></i>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Thank You!
                                    </h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    Your sample request has been submitted successfully. We'll
                                    process your request within 1-2 business days.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    You will receive a confirmation email shortly with the details
                                    of your request and tracking information once your samples are
                                    shipped.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/7a561bbd-6b25-4cfc-9942-9c0ac617001c"
                                        data-readdy="true"
                                        className="px-5 py-2 bg-[#D88F70] text-white !rounded-button hover:bg-[#C67E60] transition-colors duration-300 whitespace-nowrap cursor-pointer"
                                    >
                                        Return to Contact Page
                                    </a>
                                    <button
                                        onClick={() => setFormSubmitted(false)}
                                        className="px-5 py-2 border border-gray-300 text-gray-700 !rounded-button hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                                    >
                                        Request More Samples
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="bg-[#F8F7F3] rounded-lg p-8"
                            >
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
                                        Contact Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="fullName"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.fullName ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                                placeholder="Enter your full name"
                                            />
                                            {formErrors.fullName && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {formErrors.fullName}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="companyName"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm"
                                                placeholder="Enter your company name (optional)"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                                placeholder="Enter your email address"
                                            />
                                            {formErrors.email && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {formErrors.email}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                                placeholder="Enter your phone number"
                                            />
                                            {formErrors.phone && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {formErrors.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
                                        Shipping Address
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div>
                                            <label
                                                htmlFor="address"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Street Address <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.address ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                                placeholder="Enter your street address"
                                            />
                                            {formErrors.address && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {formErrors.address}
                                                </p>
                                            )}
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="city"
                                                    className="block text-gray-700 font-medium mb-2"
                                                >
                                                    City <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.city ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                                    placeholder="Enter your city"
                                                />
                                                {formErrors.city && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {formErrors.city}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="state"
                                                    className="block text-gray-700 font-medium mb-2"
                                                >
                                                    State/Province <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="state"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.state ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                                    placeholder="Enter your state or province"
                                                />
                                                {formErrors.state && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {formErrors.state}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="postalCode"
                                                    className="block text-gray-700 font-medium mb-2"
                                                >
                                                    Postal Code <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="postalCode"
                                                    name="postalCode"
                                                    value={formData.postalCode}
                                                    onChange={handleInputChange}
                                                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.postalCode ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                                    placeholder="Enter your postal code"
                                                />
                                                {formErrors.postalCode && (
                                                    <p className="text-red-500 text-sm mt-1">
                                                        {formErrors.postalCode}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="country"
                                                    className="block text-gray-700 font-medium mb-2"
                                                >
                                                    Country <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm appearance-none"
                                                    >
                                                        <option value="India">India</option>
                                                        <option value="United States">United States</option>
                                                        <option value="United Kingdom">
                                                            United Kingdom
                                                        </option>
                                                        <option value="Canada">Canada</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="France">France</option>
                                                        <option value="Japan">Japan</option>
                                                        <option value="Singapore">Singapore</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                                        <i className="fas fa-chevron-down text-gray-400"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200">
                                        Project Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="projectType"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Project Type
                                            </label>
                                            <div className="relative">
                                                <select
                                                    id="projectType"
                                                    name="projectType"
                                                    value={formData.projectType}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm appearance-none"
                                                >
                                                    <option value="Apparel">Apparel</option>
                                                    <option value="Home Textiles">Home Textiles</option>
                                                    <option value="Accessories">Accessories</option>
                                                    <option value="Industrial">Industrial</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                                    <i className="fas fa-chevron-down text-gray-400"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="quantity"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Estimated Quantity Interest
                                            </label>
                                            <input
                                                type="text"
                                                id="quantity"
                                                name="quantity"
                                                value={formData.quantity}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm"
                                                placeholder="e.g., 500 meters, 1000 yards, etc."
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="timeline"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Project Timeline
                                            </label>
                                            <input
                                                type="text"
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm"
                                                placeholder="e.g., 3 months, Q3 2025, etc."
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="preferredDeliveryDate"
                                                className="block text-gray-700 font-medium mb-2"
                                            >
                                                Preferred Sample Delivery Date
                                            </label>
                                            <input
                                                type="date"
                                                id="preferredDeliveryDate"
                                                name="preferredDeliveryDate"
                                                value={formData.preferredDeliveryDate}
                                                onChange={handleInputChange}
                                                min={new Date().toISOString().split("T")[0]}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label
                                            htmlFor="additionalNotes"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Additional Notes
                                        </label>
                                        <textarea
                                            id="additionalNotes"
                                            name="additionalNotes"
                                            value={formData.additionalNotes}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm"
                                            placeholder="Any specific requirements or questions about the samples?"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5 mt-1">
                                            <input
                                                id="termsAgreed"
                                                name="termsAgreed"
                                                type="checkbox"
                                                checked={formData.termsAgreed}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-[#D88F70] border-gray-300 rounded focus:ring-[#D88F70]"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="termsAgreed"
                                                className="font-medium text-gray-700"
                                            >
                                                I agree to the terms and conditions{" "}
                                                <span className="text-red-500">*</span>
                                            </label>
                                            <p className="text-gray-500">
                                                By requesting samples, you agree to our{" "}
                                                <a
                                                    href="#"
                                                    className="text-[#D88F70] hover:underline cursor-pointer"
                                                >
                                                    Privacy Policy
                                                </a>{" "}
                                                and{" "}
                                                <a
                                                    href="#"
                                                    className="text-[#D88F70] hover:underline cursor-pointer"
                                                >
                                                    Terms of Service
                                                </a>
                                                .
                                            </p>
                                            {formErrors.termsAgreed && (
                                                <p className="text-red-500 text-sm mt-1">
                                                    {formErrors.termsAgreed}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-[#D88F70] text-white !rounded-button hover:bg-[#C67E60] transition-colors duration-300 whitespace-nowrap cursor-pointer"
                                    >
                                        <i className="fas fa-paper-plane mr-2"></i> Submit Sample
                                        Request
                                    </button>
                                    <a
                                        href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/7a561bbd-6b25-4cfc-9942-9c0ac617001c"
                                        data-readdy="true"
                                        className="px-6 py-3 border border-gray-300 text-gray-700 !rounded-button hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
                                    >
                                        Cancel
                                    </a>
                                </div>
                            </form>
                        )}
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-start">
                                <div className="text-[#ADC4A0] text-xl mt-1 mr-4">
                                    <i className="fas fa-question-circle"></i>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                                    <p className="text-gray-700 mb-4">
                                        If you have any questions about our sample service or need
                                        assistance with your request, please contact our customer
                                        service team.
                                    </p>
                                    <div className="flex items-center">
                                        <i className="fas fa-envelope text-[#D88F70] mr-3"></i>
                                        <a
                                            href="mailto:samples@omcottons.com"
                                            className="text-gray-700 hover:text-[#D88F70] cursor-pointer"
                                        >
                                            samples@omcottons.com
                                        </a>
                                    </div>
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
export default App;
