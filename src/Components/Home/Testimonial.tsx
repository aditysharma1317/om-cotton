import React, { useState, useEffect } from 'react';

const Testimonial: React.FC = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    const testimonials = [
        {
            quote: "Om Cottons has consistently delivered premium quality garments that exceed our expectations. Their attention to detail and commitment to sustainability align perfectly with our brand values.",
            author: "Sarah Johnson",
            position: "Procurement Director, Fashion Forward",
            image: "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20with%20neutral%20background%2C%20warm%20lighting%2C%20professional%20attire%2C%20confident%20expression%2C%20high%20quality%20corporate%20headshot%20style%2C%20soft%20focus&width=80&height=80&seq=1&orientation=squarish"
        },
        {
            quote: "Working with Om Cottons transformed our production process. Their flexibility and quick turnaround times have been instrumental in helping us meet seasonal demands.",
            author: "Michael Chen",
            position: "Operations Manager, Urban Threads",
            image: "https://readdy.ai/api/search-image?query=professional%20asian%20business%20man%20portrait%20with%20neutral%20background%2C%20warm%20lighting%2C%20business%20casual%20attire%2C%20friendly%20smile%2C%20high%20quality%20corporate%20headshot%20style%2C%20soft%20focus&width=80&height=80&seq=2&orientation=squarish"
        },
        {
            quote: "The quality of cotton and craftsmanship from Om Cottons is unmatched. Their sustainable practices have helped us achieve our environmental goals while maintaining premium product standards.",
            author: "Emma Rodriguez",
            position: "Sustainability Lead, EcoWear Collective",
            image: "https://readdy.ai/api/search-image?query=professional%20latina%20business%20woman%20portrait%20with%20neutral%20background%2C%20warm%20lighting%2C%20smart%20casual%20attire%2C%20approachable%20expression%2C%20high%20quality%20corporate%20headshot%20style%2C%20soft%20focus&width=80&height=80&seq=3&orientation=squarish"
        }
    ];
    return (
        <section className="py-20 bg-[#E7DFD2]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold tracking-wide">What Our Clients Say</h2>
                    <div className="w-24 h-1 bg-[#D88F70] mx-auto mt-4"></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`transition-opacity duration-500 ${activeTestimonial === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                            >
                                <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                        <div className="shrink-0">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.author}
                                                className="w-20 h-20 rounded-full object-cover border-4 border-[#E7DFD2]"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-[#D88F70] mb-4">
                                                <i className="fas fa-quote-left text-2xl"></i>
                                            </div>
                                            <p className="text-lg italic mb-6 leading-relaxed">{testimonial.quote}</p>
                                            <div>
                                                <p className="font-semibold text-lg">{testimonial.author}</p>
                                                <p className="text-gray-600">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${activeTestimonial === index ? 'bg-[#D88F70]' : 'bg-gray-300'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
