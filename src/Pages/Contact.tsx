// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef } from "react";
import Navbar from '../Components/Navbar';

const App: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
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
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user types
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: "",
            });
        }
    };
    const validateForm = () => {
        const errors: { [key: string]: string } = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message.trim()) {
            errors.message = "Message is required";
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
                name: "",
                email: "",
                subject: "General Inquiry",
                message: "",
            });
            setFormSubmitted(false);
        }, 5000);
    };
    return (
        <div className="min-h-screen font-sans bg-[#F8F7F3] text-gray-800">
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=modern%2520sustainable%2520cotton%2520company%2520office%2520with%2520natural%2520light%2520streaming%2520through%2520large%2520windows%252C%2520plants%2520and%2520eco-friendly%2520decor%252C%2520warm%2520earthy%2520tones%252C%2520soft%2520gradient%2520background%2520that%2520transitions%2520from%2520light%2520to%2520darker%2520on%2520the%2520right%252C%2520professional%2520corporate%2520photography%252C%2520high%2520quality%2520image&width=1440&height=600&seq=201&orientation=landscape"
                        alt="Om Cottons Contact"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3] via-[#F8F7F3]/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-800">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            We'd love to hear from you. Whether you have a question about our
                            products, sustainability initiatives, or anything else, our team
                            is ready to answer all your inquiries.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#D88F70] text-2xl mb-2">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                                <p className="text-gray-600 text-sm"> +91 9664348046</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#ADC4A0] text-2xl mb-2">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                <p className="text-gray-600 text-sm">info@omcottons.com</p>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-sm border border-gray-100">
                                <div className="text-[#6B8E9B] text-2xl mb-2">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                                <p className="text-gray-600 text-sm">Pilani, Rajasthan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form and Map Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-8">Send Us a Message</h2>
                            {formSubmitted ? (
                                <div className="bg-[#ADC4A0]/20 p-6 rounded-lg border border-[#ADC4A0] mb-8">
                                    <div className="flex items-center mb-4">
                                        <i className="fas fa-check-circle text-[#ADC4A0] text-2xl mr-3"></i>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Thank You!
                                        </h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Your message has been sent successfully. We'll get back to
                                        you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Your Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                            placeholder="Enter your full name"
                                        />
                                        {formErrors.name && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formErrors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Your Email <span className="text-red-500">*</span>
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
                                            htmlFor="subject"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Subject
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm appearance-none"
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Product Information">
                                                    Product Information
                                                </option>
                                                <option value="Sustainability">Sustainability</option>
                                                <option value="Partnerships">Partnerships</option>
                                                <option value="Careers">Careers</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                                <i className="fas fa-chevron-down text-gray-400"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-gray-700 font-medium mb-2"
                                        >
                                            Your Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? "border-red-500" : "border-gray-300"} focus:border-[#D88F70] focus:ring focus:ring-[#D88F70]/20 transition-colors duration-300 text-sm`}
                                            placeholder="How can we help you?"
                                        ></textarea>
                                        {formErrors.message && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {formErrors.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-[#D88F70] text-white !rounded-button hover:bg-[#C67E60] transition-colors duration-300 whitespace-nowrap cursor-pointer"
                                        >
                                            <i className="fas fa-paper-plane mr-2"></i> Send Message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                        {/* Map and Hours */}
                        <div>
                            <h2 className="text-3xl font-semibold mb-8">Find Us</h2>
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                                <div className="h-80 bg-gray-200">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.688106837967!2d75.5908114757109!3d28.36827767581007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131b02414355fd%3A0x1d2abb7cb326b1ff!2sVaishno%20niketan!5e0!3m2!1sen!2snp!4v1746286636408!5m2!1sen!2snp"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Om Cottons Location"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Om Cottons Headquarters
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Vaishno Niketan, CEERI Road
                                        <br />
                                        Pilani, Rajastham 333031
                                        <br />
                                        India
                                    </p>
                                    <div className="flex items-center text-[#D88F70]">
                                        <i className="fas fa-directions mr-2"></i>
                                        <a href="https://maps.app.goo.gl/wjUgZZv7jepewhFF6"   target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                                            Get Directions
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-4">
                                        <i className="far fa-clock text-[#D88F70] mr-2"></i>
                                        Business Hours
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-700 font-medium">
                                                Monday - Friday:
                                            </span>
                                            <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700 font-medium">
                                                Saturday:
                                            </span>
                                            <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700 font-medium">Sunday:</span>
                                            <span className="text-gray-600">Closed</span>
                                        </div>
                                        <div className="pt-3 border-t border-gray-100">
                                            <span className="text-gray-500 text-sm">
                                                All times are in Indian Standard Time (IST)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Department Contacts */}
            <section className="py-16 bg-[#F8F7F3]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-12 text-center">
                        Department Contacts
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Business Inquiries */}
                        <div className="bg-white p-8 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[#D88F70]/10 rounded-full flex items-center justify-center mb-6 text-[#D88F70] text-2xl">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Business Inquiries</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Vinod Sharma</p>
                                <p className="text-gray-600">Business Development Manager</p>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-[#D88F70] mr-3"></i>
                                    <a
                                        href="mailto:business@omcottons.com"
                                        className="text-gray-700 hover:text-[#D88F70] cursor-pointer"
                                    >
                                        business@omcottons.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone-alt text-[#D88F70] mr-3"></i>
                                    <a
                                        href="tel:+919672655586"
                                        className="text-gray-700 hover:text-[#D88F70] cursor-pointer"
                                    >
                                        +91 96726 55586
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                For wholesale orders, partnerships, and business opportunities.
                            </p>
                        </div>
                        {/* Customer Support */}
                        <div className="bg-white p-8 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[#ADC4A0]/10 rounded-full flex items-center justify-center mb-6 text-[#ADC4A0] text-2xl">
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Amrita Sharma</p>
                                <p className="text-gray-600">Customer Service Manager</p>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-[#ADC4A0] mr-3"></i>
                                    <a
                                        href="mailto:support@omcottons.com"
                                        className="text-gray-700 hover:text-[#ADC4A0] cursor-pointer"
                                    >
                                        support@omcottons.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone-alt text-[#ADC4A0] mr-3"></i>
                                    <a
                                        href="tel:+919876543211"
                                        className="text-gray-700 hover:text-[#ADC4A0] cursor-pointer"
                                    >
                                        +91 98765 43211
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                For product inquiries, orders, returns, and customer assistance.
                            </p>
                        </div>
                        {/* Career Opportunities */}
                        <div className="bg-white p-8 rounded-lg shadow-sm transition-transform duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-[#6B8E9B]/10 rounded-full flex items-center justify-center mb-6 text-[#6B8E9B] text-2xl">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                                Career Opportunities
                            </h3>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Aditya Sharma</p>
                                <p className="text-gray-600">Operations Manager</p>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-[#6B8E9B] mr-3"></i>
                                    <a
                                        href="mailto:ops@omcottons.com"
                                        className="text-gray-700 hover:text-[#6B8E9B] cursor-pointer"
                                    >
                                        ops@omcottons.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone-alt text-[#6B8E9B] mr-3"></i>
                                    <a
                                        href="tel:+919664348046"
                                        className="text-gray-700 hover:text-[#6B8E9B] cursor-pointer"
                                    >
                                        +91 96643 48046
                                    </a>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                For operations queries, technical support, and career development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Additional Contact Options */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-12 text-center">
                        Additional Ways to Connect
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Schedule a Call */}
                        <div className="bg-[#F8F7F3] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-48 relative">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%2520business%2520video%2520call%2520with%2520diverse%2520team%2520members%2520discussing%2520sustainable%2520fashion%252C%2520modern%2520office%2520setting%252C%2520cotton%2520fabric%2520samples%2520visible%252C%2520warm%2520lighting%252C%2520professional%2520business%2520photography%252C%2520high%2520quality%2520image&width=400&height=300&seq=202&orientation=landscape"
                                    alt="Schedule a Call"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white">
                                            Schedule a Call
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Book a virtual meeting with our team to discuss your specific
                                    needs and requirements.
                                </p>
                                <button className="px-5 py-2 bg-[#D88F70] text-white !rounded-button hover:bg-[#C67E60] transition-colors duration-300 whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-calendar-alt mr-2"></i> Book a Call
                                </button>
                            </div>
                        </div>
                        {/* Request Samples */}
                        <div className="bg-[#F8F7F3] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-48 relative">
                                <img
                                    src="https://readdy.ai/api/search-image?query=sustainable%2520cotton%2520fabric%2520samples%2520in%2520various%2520colors%2520and%2520textures%2520arranged%2520beautifully%2520on%2520natural%2520surface%252C%2520close-up%2520detail%2520of%2520organic%2520textiles%252C%2520warm%2520natural%2520lighting%252C%2520professional%2520product%2520photography%252C%2520high%2520quality%2520image&width=400&height=300&seq=203&orientation=landscape"
                                    alt="Request Samples"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white">
                                            Request Samples
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Experience the quality of our sustainable cotton fabrics
                                    firsthand with our sample service.
                                </p>
                                <a
                                    href="#"
                                    data-readdy="true"
                                    className="px-5 py-2 bg-[#ADC4A0] text-white !rounded-button hover:bg-[#9BB58E] transition-colors duration-300 whitespace-nowrap cursor-pointer inline-block"
                                >
                                    <i className="fas fa-box-open mr-2"></i> Request Samples
                                </a>
                            </div>
                        </div>
                        {/* Visit Showroom */}
                        <div className="bg-[#F8F7F3] rounded-lg overflow-hidden shadow-sm">
                            <div className="h-48 relative">
                                <img
                                    src="https://readdy.ai/api/search-image?query=elegant%2520sustainable%2520fashion%2520showroom%2520with%2520cotton%2520clothing%2520displays%252C%2520natural%2520materials%252C%2520plants%252C%2520warm%2520lighting%252C%2520modern%2520eco-friendly%2520retail%2520space%252C%2520professional%2520interior%2520photography%252C%2520high%2520quality%2520image&width=400&height=300&seq=204&orientation=landscape"
                                    alt="Visit Showroom"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white">
                                            Visit Our Showroom
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">
                                    Tour our Pilani showroom to see our full collection and meet
                                    our team in person.
                                </p>
                                <button className="px-5 py-2 bg-[#6B8E9B] text-white !rounded-button hover:bg-[#5A7D8A] transition-colors duration-300 whitespace-nowrap cursor-pointer">
                                    <i className="fas fa-map-marker-alt mr-2"></i> Book a Visit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}
            <section className="py-16 bg-[#D88F70] text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-6">
                            Connect With Us on Social Media
                        </h2>
                        <p className="text-xl mb-8">
                            Follow us for the latest updates, behind-the-scenes content, and
                            sustainable fashion inspiration.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="#"
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#D88F70] transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#D88F70] transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#D88F70] transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-[#D88F70] transition-colors duration-300 cursor-pointer"
                            >
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-[#F8F7F3] pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="text-2xl font-semibold tracking-wider mb-6">
                                <span className="text-[#D88F70]">Om</span>{" "}
                                <span className="text-gray-800">Cottons</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Premium cotton garments crafted with care, quality, and
                                sustainability.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <i className="fab fa-linkedin text-xl"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                >
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 tracking-wide">
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        data-readdy="true"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        data-readdy="true"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        data-readdy="true"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Sustainability
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        data-readdy="true"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 tracking-wide">
                                About Us
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        data-readdy="true"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Our Story
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Mission & Values
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Leadership Team
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                                    >
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-6 tracking-wide">
                                Contact Us
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#D88F70]"></i>
                                    <span className="text-gray-600">
                                        Vaishno Niketan, CEERI Road, Pilani, Rajasthan - 333031
                                    </span>
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
                            <a
                                href="#"
                                className="hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                            >
                                Privacy Policy
                            </a>
                            <span>|</span>
                            <a
                                href="#"
                                className="hover:text-[#D88F70] transition-colors duration-400 cursor-pointer"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default App;
