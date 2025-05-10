import React from 'react';

const ValueProposition: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-wide mb-4">Why Choose Om Cottons</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We help fashion brands scale sustainably by delivering certified cotton products backed by trusted sourcing, strict quality control, and ethical manufacturing.
                    </p>
                    <div className="w-24 h-1 bg-[#D88F70] mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F8F7F3] group-hover:bg-[#E7DFD2] transition-colors duration-400">
                            <i className="fas fa-certificate text-3xl text-[#ADC4A0]"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-wide">Verified Quality</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our team follows strict quality checks at every step to ensure that only premium-grade, certified organic cotton is used in your garments, every time.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F8F7F3] group-hover:bg-[#E7DFD2] transition-colors duration-400">
                            <i className="fas fa-handshake text-3xl text-[#ADC4A0]"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-wide">Strategic Partnerships</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We work directly with certified cotton farmers and manufacturers worldwide, giving you reliable access, better pricing, and scalable production.
                        </p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F8F7F3] group-hover:bg-[#E7DFD2] transition-colors duration-400">
                            <i className="fas fa-leaf text-3xl text-[#ADC4A0]"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 tracking-wide">Sustainability</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our operations are built on transparent, eco-conscious, and socially responsible sourcing methods that align with leading global sustainability goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
