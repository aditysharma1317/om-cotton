// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  // Categories for filtering
  const categories = ['All', 'Sustainability', 'Products', 'Industry News', 'Farming', 'Fashion'];

  // Tags for quick filtering
  const tags = ['Organic Cotton', 'Sustainability', 'Eco-friendly', 'Fashion', 'Farming', 'Production', 'Fair Trade', 'Textile Industry', 'Innovation'];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Sustainable Cotton Farming in 2025',
      excerpt: 'Discover how innovative farming techniques are revolutionizing the cotton industry while preserving our planet for future generations.',
      category: 'Sustainability',
      readTime: '5 min',
      date: 'May 1, 2025',
      author: 'Emma Johnson',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20woman%20with%20short%20brown%20hair%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20natural%20smile&width=50&height=50&seq=author1&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=sustainable%20cotton%20farming%20with%20modern%20technology%2C%20drone%20monitoring%20cotton%20fields%2C%20workers%20using%20tablets%2C%20lush%20green%20cotton%20plants%2C%20sustainable%20agriculture%20practices%2C%20bright%20sunlight%2C%20clear%20blue%20sky%2C%20photorealistic&width=400&height=250&seq=blog1&orientation=landscape'
    },
    {
      id: 2,
      title: 'How Organic Cotton is Changing the Fashion Industry',
      excerpt: 'The rise of organic cotton is transforming fashion brands worldwide. Learn how this shift is impacting sustainability goals across the industry.',
      category: 'Fashion',
      readTime: '7 min',
      date: 'April 28, 2025',
      author: 'Michael Chen',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20asian%20man%20with%20glasses%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20confident%20expression&width=50&height=50&seq=author2&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=fashion%20designer%20working%20with%20organic%20cotton%20fabrics%2C%20sustainable%20fashion%20studio%2C%20rolls%20of%20white%20and%20natural%20cotton%20fabric%2C%20bright%20modern%20workspace%2C%20fashion%20sketches%2C%20eco-friendly%20clothing%20designs%2C%20photorealistic&width=400&height=250&seq=blog2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Cotton Processing Innovations: A Deep Dive',
      excerpt: 'New technologies are making cotton processing more efficient and environmentally friendly. Explore the latest innovations in the industry.',
      category: 'Industry News',
      readTime: '8 min',
      date: 'April 25, 2025',
      author: 'David Rodriguez',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20latino%20man%20with%20dark%20hair%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20friendly%20smile&width=50&height=50&seq=author3&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=modern%20cotton%20processing%20facility%20with%20advanced%20machinery%2C%20workers%20monitoring%20automated%20equipment%2C%20clean%20industrial%20environment%2C%20cotton%20fibers%20being%20processed%2C%20high-tech%20factory%20interior%2C%20bright%20lighting%2C%20photorealistic&width=400&height=250&seq=blog3&orientation=landscape'
    },
    {
      id: 4,
      title: 'The Environmental Impact of Cotton: Facts and Solutions',
      excerpt: 'Understanding the environmental footprint of cotton production and what the industry is doing to minimize negative impacts.',
      category: 'Sustainability',
      readTime: '6 min',
      date: 'April 22, 2025',
      author: 'Sarah Williams',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20woman%20with%20blonde%20hair%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20warm%20smile&width=50&height=50&seq=author4&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=environmental%20scientist%20testing%20water%20near%20cotton%20fields%2C%20measuring%20environmental%20impact%2C%20scientific%20equipment%2C%20cotton%20plants%20in%20background%2C%20conservation%20efforts%2C%20natural%20landscape%2C%20scientific%20research%2C%20photorealistic&width=400&height=250&seq=blog4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Fair Trade Cotton: Supporting Communities Worldwide',
      excerpt: 'How fair trade practices in cotton farming are uplifting communities and creating sustainable livelihoods for farmers around the globe.',
      category: 'Farming',
      readTime: '5 min',
      date: 'April 18, 2025',
      author: 'Priya Patel',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20indian%20woman%20with%20long%20dark%20hair%2C%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20confident%20expression&width=50&height=50&seq=author5&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=fair%20trade%20cotton%20farmers%20in%20rural%20community%2C%20diverse%20group%20of%20farmers%20working%20together%2C%20cotton%20harvest%2C%20rural%20village%20setting%2C%20people%20smiling%2C%20fair%20trade%20certification%20visible%2C%20global%20agriculture%2C%20photorealistic&width=400&height=250&seq=blog5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Cotton vs. Synthetic Fabrics: A Comparative Analysis',
      excerpt: 'A detailed comparison between natural cotton fabrics and synthetic alternatives, examining performance, comfort, and environmental aspects.',
      category: 'Products',
      readTime: '9 min',
      date: 'April 15, 2025',
      author: 'James Wilson',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20black%20man%20with%20short%20hair%2C%20business%20casual%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20professional%20expression&width=50&height=50&seq=author6&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=laboratory%20testing%20of%20cotton%20and%20synthetic%20fabrics%2C%20scientist%20comparing%20material%20properties%2C%20microscope%20views%20of%20fabric%20fibers%2C%20testing%20equipment%2C%20scientific%20research%20facility%2C%20bright%20clinical%20environment%2C%20fabric%20samples%2C%20photorealistic&width=400&height=250&seq=blog6&orientation=landscape'
    },
    {
      id: 7,
      title: 'The History of Cotton: From Ancient Civilizations to Modern Day',
      excerpt: 'Tracing the fascinating journey of cotton through human history and its profound impact on economies, societies, and technologies.',
      category: 'Industry News',
      readTime: '10 min',
      date: 'April 10, 2025',
      author: 'Robert Thompson',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20older%20white%20man%20with%20gray%20hair%2C%20academic%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20scholarly%20expression&width=50&height=50&seq=author7&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=historical%20cotton%20processing%20methods%20contrasted%20with%20modern%20techniques%2C%20timeline%20visualization%2C%20ancient%20cotton%20artifacts%2C%20traditional%20spinning%20wheel%2C%20modern%20cotton%20gin%2C%20historical%20and%20contemporary%20images%2C%20educational%20display%2C%20photorealistic&width=400&height=250&seq=blog7&orientation=landscape'
    },
    {
      id: 8,
      title: 'Cotton Care Guide: Making Your Textiles Last Longer',
      excerpt: 'Expert tips and best practices for maintaining cotton products, extending their lifespan, and preserving their quality through proper care.',
      category: 'Products',
      readTime: '4 min',
      date: 'April 5, 2025',
      author: 'Lisa Chen',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20asian%20woman%20with%20medium%20length%20hair%2C%20casual%20professional%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20helpful%20expression&width=50&height=50&seq=author8&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=careful%20washing%20and%20care%20of%20cotton%20garments%2C%20proper%20folding%20techniques%2C%20cotton%20clothing%20maintenance%2C%20laundry%20setting%2C%20gentle%20washing%20machine%2C%20fabric%20care%20products%2C%20neatly%20organized%20cotton%20textiles%2C%20photorealistic&width=400&height=250&seq=blog8&orientation=landscape'
    },
    {
      id: 9,
      title: 'Innovations in Cotton Textile Manufacturing for 2025',
      excerpt: 'Exploring cutting-edge technologies and processes that are defining the future of cotton textile manufacturing in the coming years.',
      category: 'Industry News',
      readTime: '7 min',
      date: 'April 1, 2025',
      author: 'Thomas Wright',
      authorImg: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle-aged%20white%20man%20with%20short%20brown%20hair%2C%20technical%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%2C%20professional%20lighting%2C%20clear%20facial%20features%2C%20innovative%20expression&width=50&height=50&seq=author9&orientation=squarish',
      image: 'https://readdy.ai/api/search-image?query=futuristic%20cotton%20textile%20manufacturing%20facility%2C%20advanced%20robotics%2C%20automated%20production%20line%2C%20innovative%20machinery%2C%20engineers%20monitoring%20digital%20interfaces%2C%20high-tech%20factory%20floor%2C%20modern%20industrial%20design%2C%20photorealistic&width=400&height=250&seq=blog9&orientation=landscape'
    },
  ];

  // Featured blog post (first post)
  const featuredPost = blogPosts[0];

  // Filter blog posts based on active filter and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeFilter === 'All' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && gdprConsent) {
      setIsSubscribed(true);
      setEmail('');
      setGdprConsent(false);
      // In a real application, you would send this data to your backend
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section with Featured Post */}
        <section className="mb-16 relative overflow-hidden rounded-xl shadow-lg">
          <div className="relative h-[500px]">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D88F70] to-transparent flex items-end">
              <div className="p-8 md:p-12 max-w-2xl">
                <span className="inline-block bg-[#D88F70] text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">{featuredPost.category}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-white/90 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center">
                  <img
                    src={featuredPost.authorImg}
                    alt={featuredPost.author}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">{featuredPost.author}</p>
                    <p className="text-white/70 text-sm">{featuredPost.date} • {featuredPost.readTime} read</p>
                  </div>
                </div>
                <Link to={`/blogs/${featuredPost.id}`}>
                  <button className="mt-6 bg-white text-[#D88F70] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    Read Article <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Latest Articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${activeFilter === category
                    ? 'bg-[#D88F70] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  onClick={() => {
                    setActiveFilter(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:bg-[#D88F70] hover:text-white cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {currentPosts.map((post) => (
              <Link to={`/blogs/${post.id}`}>
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-[#D88F70] text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">{post.category}</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.authorImg}
                          alt={post.author}
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <div className="text-sm text-gray-500">{post.readTime} read</div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty state when no posts match filters */}
          {currentPosts.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              <button
                className="mt-4 bg-[#D88F70] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#D88F70] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <section className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="mb-4 md:mb-0">
              <span className="text-sm text-gray-600">
                Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} articles
              </span>
            </div>
            <div className="flex items-center">
              <button
                className="px-3 py-2 rounded-md mr-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed !rounded-button whitespace-nowrap cursor-pointer"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  className={`w-10 h-10 mx-1 rounded-full text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer ${currentPage === number
                    ? 'bg-[#D88F70] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              ))}

              <button
                className="px-3 py-2 rounded-md ml-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed !rounded-button whitespace-nowrap cursor-pointer"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <i className="fas fa-chevron-right"></i>
              </button>

              <div className="ml-6 flex items-center">
                <span className="text-sm text-gray-600 mr-2">Show:</span>
                <select
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white cursor-pointer"
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={9}>9</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                </select>
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <section className="bg-[#D88F70] rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Stay Updated with Om-Cottons</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on sustainable cotton practices, industry insights, and exclusive content delivered straight to your inbox.
            </p>

            {isSubscribed ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg inline-block">
                <i className="fas fa-check-circle mr-2"></i>
                Thank you for subscribing! You'll receive our next newsletter soon.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D88F70] focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#D88F70] text-white px-6 py-3 rounded-full font-medium hover:bg-[#D88F70] transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="gdpr"
                    className="mt-1 mr-2"
                    checked={gdprConsent}
                    onChange={(e) => setGdprConsent(e.target.checked)}
                    required
                  />
                  <label htmlFor="gdpr" className="text-sm text-gray-600 text-left">
                    I agree to receive marketing communications from Om-Cottons. You can unsubscribe at any time.
                    See our <a href="#" className="text-[#D88F70] hover:underline">Privacy Policy</a>.
                  </label>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div >
  );
};

export default App;

