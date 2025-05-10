import React from 'react';

const Cta: React.FC = () => {
    return (
        <section className="py-20 bg-[#ADC4A0] text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide">Ready to Source Premium Organic Cotton?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Partner with OM Cottons to power your brand with sustainable cotton garments tailored to your vision
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-8 py-3 bg-white text-[#ADC4A0] text-lg font-medium rounded-button hover:bg-gray-100 transition-colors duration-400 whitespace-nowrap cursor-pointer">Request Supplier Info</button>
                    <button className="px-8 py-3 border-2 border-white text-white text-lg font-medium rounded-button hover:bg-white hover:text-[#ADC4A0] transition-colors duration-400 whitespace-nowrap cursor-pointer">Book a Consultation</button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
