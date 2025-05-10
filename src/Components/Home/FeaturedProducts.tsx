import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import tshirtImage from '../../images/featured-product-tshirt.webp';
import bedsheetImage from '../../images/featured-product-bedsheet.webp';
import blanketImage from '../../images/featured-product-blanket.webp';
import handkerchiefsImage from '../../images/featured-product-handkerchiefs.webp';
import pantsImage from '../../images/featured-product-pants.webp';
import trackpantsImage from '../../images/featured-product-trackpants.webp';

interface Product {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    badge: string;
    moq: number;
    unit: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Cotton T-Shirts',
    description:
      'Our organic cotton t-shirts, crewnecks, V-necks, and polos are soft, breathable, and long-lasting. Multiple fits and shades make them ideal for retail, uniforms, and promotions.',
    imageUrl: tshirtImage,
    badge: 'GOTS Certified',
    moq: 500,
    unit: 'kg',
  },
  {
    id: '2',
    title: 'Cotton Pants & Trousers',
    description:
      'Choose from smart formal trousers to everyday cotton bottoms, all made with breathable organic cotton and tailored for comfort, style, and durability.',
    imageUrl: pantsImage,
    badge: 'OCS Certified',
    moq: 1000,
    unit: 'm',
  },
  {
    id: '3',
    title: 'Cotton Bedcovers',
    description:
      'Our premium cotton bedcovers combine traditional stitching with modern aesthetics. Perfect for upscale bedding collections and ethically sourced product lines.',
    imageUrl: bedsheetImage,
    badge: 'Fair Trade',
    moq: 800,
    unit: 'm',
  },
  {
    id: '4',
    title: 'Cotton Blankets',
    description:
      "Woven with care, our cotton blankets reflect India's textile heritage. Lightweight yet warm, they’re ideal for conscious consumers seeking natural comfort.",
    imageUrl: blanketImage,
    badge: 'Fair Trade',
    moq: 800,
    unit: 'm',
  },
  {
    id: '5',
    title: 'Cotton Track Pants',
    description:
      'Engineered for comfort and motion, our cotton track pants are built for performance and style, perfect for sportswear, leisurewear, or active lifestyle brands.',
    imageUrl: trackpantsImage,
    badge: 'Fair Trade',
    moq: 800,
    unit: 'm',
  },
  {
    id: '6',
    title: 'Cotton Handkerchiefs',
    description:
      'Absorbent, durable, and customizable for private labels—crafted for everyday use with sustainable flair.',
    imageUrl: handkerchiefsImage,
    badge: 'Fair Trade',
    moq: 800,
    unit: 'm',
  },
];

const FeaturedProducts: React.FC = () => {
    return (
        <section className="py-20 bg-[#F8F7F3]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold tracking-wide">Featured Products</h2>
                    <div className="w-24 h-1 bg-[#D88F70] mx-auto mt-4" />
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Explore our handpicked range of sustainable cotton garments, crafted with certified fabrics and trusted by fashion brands across the globe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full relative"
                        >
                            <div className="relative h-72 overflow-hidden flex-shrink-0">
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-[#ADC4A0] text-white px-3 py-1 rounded-full text-sm">
                                    {product.badge}
                                </div>
                            </div>

                            <div className="p-6 pb-20 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="text-center mt-12">
                    <Link to="/products">
                        <button className="px-8 py-3 bg-[#D88F70] text-white rounded-button hover:bg-[#c27a5d] transition-colors duration-300 whitespace-nowrap">
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
