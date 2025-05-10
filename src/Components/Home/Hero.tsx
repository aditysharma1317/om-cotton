import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="relative h-screen flex items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F3]/90 to-transparent z-10"></div>
                <img
                    src="https://readdy.ai/api/search-image?query=extreme%20close%20up%20of%20premium%20cotton%20fabric%20texture%20under%20soft%20natural%20light%2C%20showing%20intricate%20weave%20patterns%20and%20fibers%2C%20high%20resolution%20macro%20photography%20with%20shallow%20depth%20of%20field%2C%20soft%20beige%20and%20white%20tones%2C%20luxurious%20textile%20detail&width=1920&height=1080&seq=4&orientation=landscape"
                    alt="Premium cotton fabric texture"
                    className="w-full h-full object-cover object-top"
                />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-wider mb-6">
                        Your Trusted Partner in Organic Cotton Sourcing.
                    </h1>
                    <p className="text-xl mb-8 tracking-wide">
                        Connecting fashion brands with premium organic cotton suppliers, ensuring quality, sustainability, and ethical sourcing.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button onClick={() => navigate('/request-samples')} className="px-8 py-3 bg-[#ADC4A0] text-white text-lg rounded-button hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">Request Samples</button>
                        <button className="px-8 py-3 border border-[#D88F70] text-[#D88F70] text-lg rounded-button hover:bg-[#D88F70] hover:text-white transition-colors duration-400 whitespace-nowrap cursor-pointer">Book a Call</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
