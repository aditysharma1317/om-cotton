import React from 'react';

const Showcase: React.FC = () => {
    return (
        <section className="py-16 bg-[#F8F7F3]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold tracking-wide mb-4">Our Certifications</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We back our sustainability promises with globally respected certifications. Each one reflects our commitment to ethical sourcing, safe labor, and eco-friendly manufacturing.
                    </p>
                    <div className="w-24 h-1 bg-[#D88F70] mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                        <div className="w-20 h-20 mx-auto mb-6">
                            <img src="https://readdy.ai/api/search-image?query=GOTS%20Global%20Organic%20Textile%20Standard%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=5&orientation=squarish" alt="GOTS Certification" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">GOTS Certified</h3>
                        <p className="text-gray-600">
                            GOTS ensures our cotton is grown organically and processed without harmful chemicals. It also confirms that every stage from harvesting to packaging, meets strict social and environmental standards.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                        <div className="w-20 h-20 mx-auto mb-6">
                            <img src="https://readdy.ai/api/search-image?query=Fair%20Trade%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=6&orientation=squarish" alt="Fair Trade Certification" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fair Trade Certified</h3>
                        <p className="text-gray-600">
                            Our Fair Trade certification means every worker in our supply chain is treated with dignity, paid fairly, and works in safe conditions. It reflects our focus on equity, respect, and long-term impact.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                        <div className="w-20 h-20 mx-auto mb-6">
                            <img src="https://readdy.ai/api/search-image?query=Recycled%20Materials%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=7&orientation=squarish" alt="Recycled Materials Certification" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Recycled Materials</h3>
                        <p className="text-gray-600">
                            This certification confirms that the recycled fibers we use are sourced from verified post-consumer or industrial waste, helping reduce landfill pressure and conserve valuable raw resources.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
