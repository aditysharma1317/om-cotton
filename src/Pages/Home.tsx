import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
  const partners = [
    "Nordica Apparel", "Urban Collective", "Eco Threads", "Modern Basics",
    "Pure Garments", "Textile Innovations", "Fashion Forward", "Sustainable Styles"
  ];
  return (
    <div className="min-h-screen font-sans bg-[#F8F7F3] text-gray-800">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
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
              <button className="px-8 py-3 bg-[#ADC4A0] text-white text-lg rounded-button hover:bg-[#9BB58E] transition-colors duration-400 whitespace-nowrap cursor-pointer">Request Samples</button>
              <button className="px-8 py-3 border border-[#D88F70] text-[#D88F70] text-lg rounded-button hover:bg-[#D88F70] hover:text-white transition-colors duration-400 whitespace-nowrap cursor-pointer">Book a Call</button>
            </div>
          </div>
        </div>
      </section>
      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-wide">Why Choose Om Cottons</h2>
            <div className="w-24 h-1 bg-[#D88F70] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F8F7F3] group-hover:bg-[#E7DFD2] transition-colors duration-400">
                <i className="fas fa-certificate text-3xl text-[#ADC4A0]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-wide">Verified Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous supplier vetting and quality control processes ensure only the finest organic cotton reaches your production line.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F8F7F3] group-hover:bg-[#E7DFD2] transition-colors duration-400">
                <i className="fas fa-handshake text-3xl text-[#ADC4A0]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-wide">Strategic Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct relationships with certified organic cotton suppliers worldwide, offering competitive advantages to our clients.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#F8F7F3] group-hover:bg-[#E7DFD2] transition-colors duration-400">
                <i className="fas fa-leaf text-3xl text-[#ADC4A0]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-wide">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring transparent and ethical sourcing practices that align with global organic and sustainability standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="relative py-16 bg-[#E7DFD2]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-wide">Our Sourcing Process</h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              From farm selection to delivery, we ensure transparency and quality at every step of the organic cotton sourcing journey.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
            <div className={`absolute inset-0 bg-gray-200 flex items-center justify-center ${videoLoaded ? 'hidden' : 'block'}`}>
              <div className="animate-pulse">
                <i className="fas fa-spinner fa-spin text-4xl text-[#ADC4A0]"></i>
              </div>
            </div>
            <video
              className="w-full"
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-sewing-a-piece-of-fabric-with-a-needle-and-thread-13418-large.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex justify-between text-white">
                <span><i className="fas fa-search mr-2"></i> Farm Selection</span>
                <span><i className="fas fa-certificate mr-2"></i> Quality Verification</span>
                <span><i className="fas fa-clipboard-check mr-2"></i> Certification Check</span>
                <span><i className="fas fa-truck mr-2"></i> Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-wide">Trusted By Leading Brands</h2>
            <div className="w-24 h-1 bg-[#D88F70] mx-auto mt-4"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group flex items-center justify-center h-20 transition-all duration-400"
              >
                <div className="text-xl font-semibold tracking-wide text-gray-400 group-hover:text-gray-800 transition-colors duration-400 flex items-center">
                  <i className={`fas fa-${['tshirt', 'store', 'leaf', 'shopping-bag', 'recycle', 'industry', 'tag', 'globe'][index % 8]} mr-2`}></i>
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-20 bg-[#F8F7F3]">
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
      {/* CTA Section */}
      <section className="py-20 bg-[#ADC4A0] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide">Ready to Source Premium Organic Cotton?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Om Cottons to access the finest organic cotton suppliers that align with your brand's vision and values.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-3 bg-white text-[#ADC4A0] text-lg font-medium rounded-button hover:bg-gray-100 transition-colors duration-400 whitespace-nowrap cursor-pointer">Request Supplier Info</button>
            <button className="px-8 py-3 border-2 border-white text-white text-lg font-medium rounded-button hover:bg-white hover:text-[#ADC4A0] transition-colors duration-400 whitespace-nowrap cursor-pointer">Book a Consultation</button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default App
