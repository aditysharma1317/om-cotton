// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const App: React.FC = () => {
    const [showShareOptions, setShowShareOptions] = useState(false);

    // Toggle share options
    const toggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
    };

    // Simulated article content
    const article = {
        id: 1,
        title: "The Future of Sustainable Cotton Farming in 2025",
        excerpt: "Discover how innovative farming techniques are revolutionizing the cotton industry while preserving our planet for future generations.",
        content: [
            {
                type: "paragraph",
                text: "The cotton industry stands at a pivotal crossroads in 2025. With climate change accelerating and consumer demand for sustainable products reaching unprecedented levels, cotton farmers worldwide are embracing revolutionary approaches that promise to transform the industry while preserving our planet for future generations."
            },
            {
                type: "heading",
                text: "The Technological Revolution in Cotton Farming"
            },
            {
                type: "paragraph",
                text: "Modern sustainable cotton farming has evolved dramatically from traditional methods. Today's farmers are equipped with an arsenal of cutting-edge technologies that optimize resource usage while maximizing yield and quality. Precision agriculture, powered by IoT sensors, satellite imagery, and AI-driven analytics, allows farmers to monitor soil conditions, water usage, and plant health in real-time."
            },
            {
                type: "paragraph",
                text: "Drones equipped with multispectral cameras fly over vast cotton fields, identifying areas that require attention long before problems become visible to the human eye. These aerial scouts can detect early signs of pest infestations, nutrient deficiencies, or irrigation issues, enabling targeted interventions that minimize the use of pesticides and fertilizers."
            },
            {
                type: "image",
                url: "https://readdy.ai/api/search-image?query=agricultural%2520drone%2520flying%2520over%2520cotton%2520field%252C%2520monitoring%2520crops%2520with%2520advanced%2520sensors%252C%2520modern%2520farming%2520technology%252C%2520sustainable%2520agriculture%252C%2520bright%2520sunlight%252C%2520lush%2520green%2520cotton%2520plants%2520stretching%2520to%2520horizon%252C%2520high%2520resolution%2520photorealistic%2520image&width=800&height=400&seq=article1&orientation=landscape",
                caption: "Agricultural drones monitor cotton fields, providing real-time data on crop health and environmental conditions."
            },
            {
                type: "pullquote",
                text: "The integration of AI and IoT in cotton farming has reduced water consumption by 40% and pesticide use by 35% compared to traditional methods, while increasing yields by 25%."
            },
            {
                type: "heading",
                text: "Water Conservation: The Heart of Sustainable Cotton"
            },
            {
                type: "paragraph",
                text: "Water scarcity remains one of the most pressing challenges in cotton production. Traditional cotton farming is notoriously water-intensive, requiring approximately 20,000 liters of water to produce a single kilogram of cotton. In 2025, innovative irrigation systems have revolutionized water usage in cotton cultivation."
            },
            {
                type: "paragraph",
                text: "Subsurface drip irrigation delivers water directly to the root zone, minimizing evaporation and runoff. These systems, coupled with soil moisture sensors and weather forecasting algorithms, ensure that plants receive precisely the amount of water they need, when they need it. Some advanced farms have implemented closed-loop water recycling systems that capture, filter, and reuse irrigation water, further reducing their environmental footprint."
            },
            {
                type: "heading",
                text: "Regenerative Agriculture: Beyond Sustainability"
            },
            {
                type: "paragraph",
                text: "The most forward-thinking cotton producers have moved beyond mere sustainability to embrace regenerative agriculture—a holistic approach that aims not just to maintain but to improve the ecosystems in which farming takes place. These practices include minimal tillage, cover cropping, crop rotation, and integration of livestock."
            },
            {
                type: "paragraph",
                text: "By maintaining living roots in the soil year-round and minimizing soil disturbance, regenerative cotton farming enhances soil health, increases biodiversity, improves water retention, and sequesters carbon from the atmosphere. Studies have shown that regenerative cotton fields can become net carbon sinks, actively helping to mitigate climate change rather than contributing to it."
            },
            {
                type: "image",
                url: "https://readdy.ai/api/search-image?query=regenerative%2520cotton%2520farming%2520with%2520cover%2520crops%2520between%2520rows%252C%2520diverse%2520plant%2520species%252C%2520healthy%2520soil%2520ecosystem%252C%2520sustainable%2520agriculture%2520practices%252C%2520natural%2520pest%2520control%252C%2520biodiversity%252C%2520morning%2520light%252C%2520photorealistic%2520detailed%2520image&width=800&height=400&seq=article2&orientation=landscape",
                caption: "Regenerative cotton farming incorporates cover crops and biodiversity to enhance soil health and ecosystem resilience."
            },
            {
                type: "heading",
                text: "Genetic Innovation: Drought-Resistant Cotton Varieties"
            },
            {
                type: "paragraph",
                text: "Advances in genetic research have yielded new cotton varieties that thrive with significantly less water and demonstrate enhanced resistance to pests and diseases. Unlike controversial GMO approaches of the past, many of these innovations utilize marker-assisted breeding and CRISPR gene-editing technology, which allow scientists to work within the cotton plant's natural genetic potential."
            },
            {
                type: "paragraph",
                text: "These new varieties can produce high-quality fiber while requiring up to 60% less water than conventional cotton. Some have been specifically developed to flourish in marginal soils, expanding the potential for cotton cultivation in regions previously considered unsuitable."
            },
            {
                type: "pullquote",
                text: "The next generation of cotton varieties combines drought resistance with pest resilience, enabling farmers to produce more fiber with fewer inputs while adapting to changing climate conditions."
            },
            {
                type: "heading",
                text: "Blockchain and Transparency: Building Consumer Trust"
            },
            {
                type: "paragraph",
                text: "As consumers increasingly demand transparency in supply chains, blockchain technology has emerged as a powerful tool for verifying the sustainability credentials of cotton products. From field to fabric, each step of the production process is recorded on immutable digital ledgers, allowing consumers to trace the journey of their cotton products with unprecedented detail."
            },
            {
                type: "paragraph",
                text: "QR codes on garment tags now reveal not just where the cotton was grown, but the specific farming practices used, the environmental impact metrics, and even the fair labor certifications of everyone involved in the production process. This radical transparency has created powerful market incentives for sustainable practices throughout the supply chain."
            },
            {
                type: "heading",
                text: "Economic Viability: Making Sustainability Profitable"
            },
            {
                type: "paragraph",
                text: "Perhaps the most significant development in sustainable cotton farming is the growing recognition that environmental stewardship and economic viability are not competing goals but complementary ones. Reduced input costs, premium prices for certified sustainable cotton, and greater resilience to climate disruptions have made sustainable practices increasingly attractive from a business perspective."
            },
            {
                type: "paragraph",
                text: "Innovative financing mechanisms, such as payments for ecosystem services and carbon credits for regenerative practices, provide additional revenue streams for farmers transitioning to sustainable methods. Meanwhile, long-term contracts from major brands committed to sustainable sourcing offer market security that encourages investment in sustainable infrastructure."
            },
            {
                type: "image",
                url: "https://readdy.ai/api/search-image?query=farmer%2520examining%2520organic%2520cotton%2520plants%252C%2520sustainable%2520farming%2520practices%252C%2520rural%2520agricultural%2520setting%252C%2520diverse%2520ecosystem%252C%2520natural%2520pest%2520management%252C%2520healthy%2520soil%252C%2520golden%2520hour%2520lighting%252C%2520photorealistic%2520detailed%2520image&width=800&height=400&seq=article3&orientation=landscape",
                caption: "A farmer inspects organic cotton plants grown using sustainable practices that promote ecosystem health and biodiversity."
            },
            {
                type: "heading",
                text: "The Road Ahead: Challenges and Opportunities"
            },
            {
                type: "paragraph",
                text: "Despite remarkable progress, sustainable cotton farming in 2025 still faces significant challenges. Climate change continues to disrupt growing seasons and increase the frequency of extreme weather events. Access to technology remains uneven, with smallholder farmers in developing regions often lacking the resources to implement advanced sustainable practices."
            },
            {
                type: "paragraph",
                text: "However, collaborative initiatives between governments, NGOs, and private industry are working to bridge these gaps. Technology transfer programs, microfinance for sustainable equipment, and farmer education networks are helping to democratize access to sustainable farming methods. Meanwhile, research continues into even more efficient and resilient approaches to cotton cultivation."
            },
            {
                type: "paragraph",
                text: "The future of cotton farming lies not in a single revolutionary technology but in the thoughtful integration of multiple approaches tailored to specific local conditions. By combining the best of traditional knowledge with cutting-edge innovation, the cotton industry is demonstrating that agriculture can be a powerful force for environmental regeneration and social good."
            },
            {
                type: "pullquote",
                text: "Sustainable cotton isn't just about reducing harm—it's about reimagining agriculture as a positive force that restores ecosystems while providing for human needs."
            },
            {
                type: "heading",
                text: "Conclusion: A Fiber Reborn"
            },
            {
                type: "paragraph",
                text: "As we look toward the future, the transformation of cotton farming represents one of the most promising sustainability success stories in agriculture. From ancient fiber to modern marvel, cotton continues to evolve, proving that even the most traditional industries can reinvent themselves for a more sustainable future."
            },
            {
                type: "paragraph",
                text: "The farmers, scientists, technologists, and consumers driving this change are demonstrating that with innovation, collaboration, and commitment, we can create agricultural systems that nourish rather than deplete our planet. In the fields of sustainable cotton, we can glimpse the future of farming itself—a future where prosperity and planetary health grow together, fiber by fiber, season by season."
            }
        ],
        category: "Sustainability",
        readTime: "5 min",
        date: "May 1, 2025",
        author: {
            name: "Emma Johnson",
            image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520woman%2520with%2520short%2520brown%2520hair%252C%2520business%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520lighting%252C%2520clear%2520facial%2520features%252C%2520natural%2520smile&width=120&height=120&seq=author1&orientation=squarish",
            bio: "Emma Johnson is a renowned agricultural scientist specializing in sustainable farming practices. With over 15 years of experience in the field, she has consulted for major textile companies and international development organizations. Her research focuses on water-efficient farming techniques and regenerative agriculture.",
            role: "Senior Agricultural Scientist",
            socialLinks: {
                twitter: "#",
                linkedin: "#",
                website: "#"
            }
        },
        featuredImage: "https://readdy.ai/api/search-image?query=sustainable%2520cotton%2520farming%2520with%2520modern%2520technology%252C%2520drone%2520monitoring%2520cotton%2520fields%252C%2520workers%2520using%2520tablets%252C%2520lush%2520green%2520cotton%2520plants%252C%2520sustainable%2520agriculture%2520practices%252C%2520bright%2520sunlight%252C%2520clear%2520blue%2520sky%252C%2520photorealistic%2520detailed%2520landscape&width=1200&height=600&seq=featured1&orientation=landscape",
        tags: ["Sustainable Farming", "AgTech", "Water Conservation", "Regenerative Agriculture", "Cotton Industry"],
        relatedArticles: [
            {
                id: 2,
                title: "How Organic Cotton is Changing the Fashion Industry",
                excerpt: "The rise of organic cotton is transforming fashion brands worldwide. Learn how this shift is impacting sustainability goals across the industry.",
                category: "Fashion",
                readTime: "7 min",
                date: "April 28, 2025",
                author: "Michael Chen",
                image: "https://readdy.ai/api/search-image?query=fashion%2520designer%2520working%2520with%2520organic%2520cotton%2520fabrics%252C%2520sustainable%2520fashion%2520studio%252C%2520rolls%2520of%2520white%2520and%2520natural%2520cotton%2520fabric%252C%2520bright%2520modern%2520workspace%252C%2520fashion%2520sketches%252C%2520eco-friendly%2520clothing%2520designs%252C%2520photorealistic&width=400&height=250&seq=related1&orientation=landscape"
            },
            {
                id: 5,
                title: "Fair Trade Cotton: Supporting Communities Worldwide",
                excerpt: "How fair trade practices in cotton farming are uplifting communities and creating sustainable livelihoods for farmers around the globe.",
                category: "Farming",
                readTime: "5 min",
                date: "April 18, 2025",
                author: "Priya Patel",
                image: "https://readdy.ai/api/search-image?query=fair%2520trade%2520cotton%2520farmers%2520in%2520rural%2520community%252C%2520diverse%2520group%2520of%2520farmers%2520working%2520together%252C%2520cotton%2520harvest%252C%2520rural%2520village%2520setting%252C%2520people%2520smiling%252C%2520fair%2520trade%2520certification%2520visible%252C%2520global%2520agriculture%252C%2520photorealistic&width=400&height=250&seq=related2&orientation=landscape"
            },
            {
                id: 4,
                title: "The Environmental Impact of Cotton: Facts and Solutions",
                excerpt: "Understanding the environmental footprint of cotton production and what the industry is doing to minimize negative impacts.",
                category: "Sustainability",
                readTime: "6 min",
                date: "April 22, 2025",
                author: "Sarah Williams",
                image: "https://readdy.ai/api/search-image?query=environmental%2520scientist%2520testing%2520water%2520near%2520cotton%2520fields%252C%2520measuring%2520environmental%2520impact%252C%2520scientific%2520equipment%252C%2520cotton%2520plants%2520in%2520background%252C%2520conservation%2520efforts%252C%2520natural%2520landscape%252C%2520scientific%2520research%252C%2520photorealistic&width=400&height=250&seq=related3&orientation=landscape"
            }
        ]
    };

    // Function to render article content
    const renderArticleContent = () => {
        return article.content.map((section, index) => {
            switch (section.type) {
                case 'paragraph':
                    return (
                        <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                            {section.text}
                        </p>
                    );
                case 'heading':
                    return (
                        <h2 key={index} className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                            {section.text}
                        </h2>
                    );
                case 'image':
                    return (
                        <figure key={index} className="my-8">
                            <img
                                src={section.url}
                                alt={section.caption}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            <figcaption className="text-sm text-gray-500 mt-2 italic text-center">
                                {section.caption}
                            </figcaption>
                        </figure>
                    );
                case 'pullquote':
                    return (
                        <blockquote key={index} className="border-l-4 border-indigo-600 pl-6 py-2 my-8 text-xl text-gray-700 italic font-medium">
                            {section.text}
                        </blockquote>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto px-4 pt-24 pb-12">
                {/* Back to Blog Navigation */}
                <div className="mb-8">
                    <a
                        href="https://readdy.ai/home/f9f42b02-5c36-49ef-ac63-f199f73582d2/560f279f-ee47-4c8f-9627-d67d23098672"
                        data-readdy="true"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Back to Blog
                    </a>
                </div>

                {/* Article Hero Section */}
                <div className="mb-12">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-[500px] object-cover object-top"
                        />
                    </div>

                    <div className="max-w-4xl mx-auto mt-8">
                        <div className="flex items-center mb-4">
                            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mr-3">{article.category}</span>
                            <span className="text-gray-500 text-sm">{article.date} • {article.readTime} read</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>

                        <div className="flex items-center mb-8">
                            <img
                                src={article.author.image}
                                alt={article.author.name}
                                className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <p className="font-medium text-gray-900">{article.author.name}</p>
                                <p className="text-gray-600 text-sm">{article.author.role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <article className="bg-white rounded-xl shadow-md p-8 mb-8">
                            <div className="max-w-3xl mx-auto prose prose-lg prose-indigo">
                                {renderArticleContent()}
                            </div>

                            {/* Tags */}
                            <div className="border-t border-gray-200 pt-6 mt-8">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* Author Bio */}
                        <div className="bg-indigo-50 rounded-xl p-6 mb-8">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                <img
                                    src={article.author.image}
                                    alt={article.author.name}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{article.author.name}</h3>
                                    <p className="text-gray-600 mb-4">{article.author.bio}</p>
                                    <div className="flex space-x-4">
                                        <a href={article.author.socialLinks.twitter} className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href={article.author.socialLinks.linkedin} className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href={article.author.socialLinks.website} className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                            <i className="fas fa-globe"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation between articles */}
                        <div className="flex justify-between items-center border-t border-b border-gray-200 py-4 mb-8">
                            <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                <i className="fas fa-arrow-left mr-2"></i> Previous Article
                            </a>
                            <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800 cursor-pointer">
                                Next Article <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        {/* Share Widget */}
                        <div className="bg-white rounded-xl shadow-md p-6 mb-8 sticky top-24">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Share This Article</h3>
                            <div className="flex flex-wrap gap-3 mb-6">
                                <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                                    <i className="fab fa-facebook-f mr-2"></i> Facebook
                                </button>
                                <button className="flex items-center justify-center bg-sky-500 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                                    <i className="fab fa-twitter mr-2"></i> Twitter
                                </button>
                                <button className="flex items-center justify-center bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                                    <i className="fab fa-linkedin-in mr-2"></i> LinkedIn
                                </button>
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    value="https://om-cottons.com/blog/sustainable-cotton-farming-2025"
                                    readOnly
                                    className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <button
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-600 hover:text-indigo-800 !rounded-button whitespace-nowrap cursor-pointer"
                                    onClick={() => {
                                        navigator.clipboard.writeText("https://om-cottons.com/blog/sustainable-cotton-farming-2025");
                                        alert("Link copied to clipboard!");
                                    }}
                                >
                                    <i className="fas fa-copy"></i>
                                </button>
                            </div>
                        </div>

                        {/* Table of Contents */}
                        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Table of Contents</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">The Technological Revolution in Cotton Farming</a>
                                </li>
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Water Conservation: The Heart of Sustainable Cotton</a>
                                </li>
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Regenerative Agriculture: Beyond Sustainability</a>
                                </li>
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Genetic Innovation: Drought-Resistant Cotton Varieties</a>
                                </li>
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Blockchain and Transparency: Building Consumer Trust</a>
                                </li>
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Economic Viability: Making Sustainability Profitable</a>
                                </li>
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">The Road Ahead: Challenges and Opportunities</a>
                                </li>
                                <li>
                                    <a href="#" className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Conclusion: A Fiber Reborn</a>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-indigo-50 rounded-xl p-6 mb-8">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Stay Updated</h3>
                            <p className="text-gray-600 mb-4">Get the latest sustainable cotton insights delivered to your inbox.</p>
                            <form>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full border border-gray-300 rounded-full px-4 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Related Articles */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {article.relatedArticles.map((relatedArticle) => (
                            <article
                                key={relatedArticle.id}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={relatedArticle.image}
                                        alt={relatedArticle.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">{relatedArticle.category}</span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{relatedArticle.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedArticle.excerpt}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-700">{relatedArticle.author}</span>
                                        <div className="text-sm text-gray-500">{relatedArticle.readTime} read</div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Comments Section */}
                <section className="bg-white rounded-xl shadow-md p-8 mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Comments (3)</h2>

                    {/* Comment Form */}
                    <div className="mb-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Leave a Comment</h3>
                        <form>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Share your thoughts..."
                                    rows={4}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="saveInfo"
                                    className="mr-2"
                                />
                                <label htmlFor="saveInfo" className="text-sm text-gray-600">
                                    Save my name and email for the next time I comment
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">
                        {/* Comment 1 */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-start mb-4">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520middle-aged%2520man%2520with%2520glasses%252C%2520casual%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520lighting%252C%2520clear%2520facial%2520features%252C%2520friendly%2520expression&width=50&height=50&seq=comment1&orientation=squarish"
                                    alt="Robert Davis"
                                    className="w-10 h-10 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="flex items-center mb-1">
                                        <h4 className="font-medium text-gray-900 mr-2">Robert Davis</h4>
                                        <span className="text-gray-500 text-sm">May 2, 2025</span>
                                    </div>
                                    <p className="text-gray-700">This article provides an excellent overview of the innovations in sustainable cotton farming. I particularly appreciated the section on regenerative agriculture and its potential for carbon sequestration.</p>
                                    <button className="text-indigo-600 text-sm mt-2 hover:text-indigo-800 cursor-pointer">Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Comment 2 */}
                        <div className="border-b border-gray-200 pb-6">
                            <div className="flex items-start mb-4">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520a%2520young%2520woman%2520with%2520curly%2520hair%252C%2520casual%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520lighting%252C%2520clear%2520facial%2520features%252C%2520smiling%2520expression&width=50&height=50&seq=comment2&orientation=squarish"
                                    alt="Sophia Martinez"
                                    className="w-10 h-10 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="flex items-center mb-1">
                                        <h4 className="font-medium text-gray-900 mr-2">Sophia Martinez</h4>
                                        <span className="text-gray-500 text-sm">May 2, 2025</span>
                                    </div>
                                    <p className="text-gray-700">As someone working in the textile industry, I've seen firsthand how these sustainable practices are transforming our supply chains. The blockchain transparency section is especially relevant to our current challenges.</p>
                                    <button className="text-indigo-600 text-sm mt-2 hover:text-indigo-800 cursor-pointer">Reply</button>
                                </div>
                            </div>

                            {/* Nested Reply */}
                            <div className="flex items-start ml-12 mt-4">
                                <img
                                    src={article.author.image}
                                    alt={article.author.name}
                                    className="w-10 h-10 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="flex items-center mb-1">
                                        <h4 className="font-medium text-gray-900 mr-2">{article.author.name}</h4>
                                        <span className="text-gray-500 text-sm">May 3, 2025</span>
                                        <span className="ml-2 text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">Author</span>
                                    </div>
                                    <p className="text-gray-700">Thank you for sharing your industry perspective, Sophia! I'd love to hear more about how these technologies are being implemented in your specific context.</p>
                                    <button className="text-indigo-600 text-sm mt-2 hover:text-indigo-800 cursor-pointer">Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Comment 3 */}
                        <div>
                            <div className="flex items-start">
                                <img
                                    src="https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520an%2520older%2520man%2520with%2520white%2520beard%252C%2520academic%2520attire%252C%2520neutral%2520background%252C%2520high%2520quality%2520portrait%252C%2520professional%2520lighting%252C%2520clear%2520facial%2520features%252C%2520thoughtful%2520expression&width=50&height=50&seq=comment3&orientation=squarish"
                                    alt="Dr. James Wilson"
                                    className="w-10 h-10 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <div className="flex items-center mb-1">
                                        <h4 className="font-medium text-gray-900 mr-2">Dr. James Wilson</h4>
                                        <span className="text-gray-500 text-sm">May 3, 2025</span>
                                    </div>
                                    <p className="text-gray-700">I would add that policy support is crucial for scaling these innovations. Without appropriate incentives and regulations, many farmers lack the resources to transition to more sustainable methods despite their long-term benefits.</p>
                                    <button className="text-indigo-600 text-sm mt-2 hover:text-indigo-800 cursor-pointer">Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Back to top button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors !rounded-button cursor-pointer"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </main>
            <Footer />
        </div>
    );
};

export default App;

