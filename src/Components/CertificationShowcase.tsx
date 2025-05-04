import React from 'react';

const Showcase: React.FC = () => {
    return (
        <section className="py-16 bg-[#F8F7F3]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold tracking-wide mb-4">Our Certifications</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We hold ourselves to the highest standards through internationally recognized certifications that verify our commitment to sustainability and ethical practices.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                        <div className="w-20 h-20 mx-auto mb-6">
                            <img src="https://readdy.ai/api/search-image?query=GOTS%20Global%20Organic%20Textile%20Standard%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=5&orientation=squarish" alt="GOTS Certification" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">GOTS Certified</h3>
                        <p className="text-gray-600">
                            The Global Organic Textile Standard ensures organic status of textiles from harvesting of the raw materials through environmentally and socially responsible manufacturing.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                        <div className="w-20 h-20 mx-auto mb-6">
                            <img src="https://readdy.ai/api/search-image?query=Fair%20Trade%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=6&orientation=squarish" alt="Fair Trade Certification" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Fair Trade Certified</h3>
                        <p className="text-gray-600">
                            Fair Trade certification ensures that farmers and workers behind our products receive fair compensation and work in safe conditions with respect for their rights and dignity.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                        <div className="w-20 h-20 mx-auto mb-6">
                            <img src="https://readdy.ai/api/search-image?query=Recycled%20Materials%20certification%20logo%20on%20white%20background%2C%20professional%20certification%20emblem%2C%20high%20quality%2C%20clean%20design&width=80&height=80&seq=7&orientation=squarish" alt="Recycled Materials Certification" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Recycled Materials</h3>
                        <p className="text-gray-600">
                            This certification verifies that our recycled materials meet quality standards and truly come from post-consumer or post-industrial waste, reducing environmental impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
