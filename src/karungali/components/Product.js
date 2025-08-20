import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import product1 from '../assets/product1.webp';
import product3 from '../assets/productone.webp';
import product4 from '../assets/product3.webp'
import product6 from '../assets/product5.webp'
import product7 from '../assets/product6.webp'
import product8 from '../assets/product7.webp'
import product9 from '../assets/product8.webp'
import product10 from '../assets/product9.webp';
import god from '../assets/god.webp';
import wood from '../assets/wood.webp';

const Product = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [autoSlideProgress, setAutoSlideProgress] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  // Product details for billing
  const product = {
    name: 'Karungali Mala & Bracelet',
    cost: 1490
  };

  // Auto-slide constants
  const AUTO_SLIDE_INTERVAL = 1000; // 1 second

  // Refs for synchronized scrolling
  const imageContainerRef = useRef(null);
  const productSectionRef = useRef(null);

  // Product images
  const productImages = [product6, product7, product8, product9, product1, product3, product4];

  useEffect(() => {
    if (!isAutoSliding) {
      setAutoSlideProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setAutoSlideProgress(prev => {
        const newProgress = prev + 50; // Update every 50ms
        if (newProgress >= AUTO_SLIDE_INTERVAL) {
          setSelectedImageIndex(prevIndex =>
            prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
          );
          return 0;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [isAutoSliding, productImages.length, selectedImageIndex]);

  // Buy Now handler
  const handleBuyNow = () => {
    // Get existing cart items
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Create new product item
    const newProduct = {
      name: product.name,
      quantity: quantity,
      price: Number(product.cost),
      cost: Number(product.cost)
    };

    // Process cart items to ensure they have proper price format
    const processedCartItems = cartItems.map(item => ({
      name: item.name,
      quantity: 1,
      price: Number(item.cost),
      cost: Number(item.cost)
    }));

    // Combine cart items with new product
    const allItems = [...processedCartItems, newProduct];

    // Calculate total amount
    const totalAmount = allItems.reduce((total, item) => {
      return total + (Number(item.price) || Number(item.cost) || 0) * (item.quantity || 1);
    }, 0);

    // Navigate to billing with combined items
    navigate('/billing', {
      state: {
        items: allItems,
        totalAmount: totalAmount,
        quantity: allItems.length,
        paymentMode: 'online',
      },
    });
  };

  return (
    <section ref={productSectionRef} id="product" className="bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-400">
      <div className="px-4 sm:px-6">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 sm:mb-8 leading-tight tracking-tight px-2">
            Karungali Sacred
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg sm:text-xl text-yellow-800 leading-relaxed mb-6">
              Ancient wisdom says Karungali brings luck and removes obstacles — own your piece now before it's gone.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start mb-16 sm:mb-20 lg:mb-24">
          {/* Left - Image Gallery with Fixed Scroll */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              ref={imageContainerRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative transition-transform duration-100 ease-out will-change-transform"
            >
              {/* Main Display Container */}
              <div className="relative bg-gradient-to-br from-orange-900/60 via-red-800/40 to-orange-900/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-orange-400/20 backdrop-blur-sm overflow-hidden">
                {/* Professional corner accents */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-yellow-400/60"></div>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-yellow-400/60"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-yellow-400/60"></div>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-yellow-400/60"></div>
                {/* Main Product Display */}
                <div
                  className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-white shadow-2xl group cursor-pointer"
                  onMouseEnter={() => setIsAutoSliding(false)}
                  onMouseLeave={() => setIsAutoSliding(true)}
                >
                  <img
                    src={productImages[selectedImageIndex]}
                    alt={`Karungali Sacred Collection - View ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                  />
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/5 pointer-events-none"></div>
                  {/* Auto-slide indicator */}
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 flex items-center gap-1 sm:gap-2 bg-black/50 rounded-full px-2 py-1 sm:px-3 sm:py-2">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${isAutoSliding ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                    <span className="text-white text-xs font-medium">
                      {isAutoSliding ? 'Auto' : 'Manual'}
                    </span>
                  </div>
                </div>
                {/* Professional Navigation */}
                <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 lg:mt-8">
                  {productImages.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setSelectedImageIndex(index);
                        setIsAutoSliding(false);
                        // Resume auto-slide after 3 seconds
                        setTimeout(() => setIsAutoSliding(true), 3000);
                      }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border-2 transition-all duration-300 overflow-hidden relative group ${
                        selectedImageIndex === index
                          ? 'border-orange-400 shadow-lg shadow-orange-400/30'
                          : 'border-orange-500/30 hover:border-orange-400/60'
                      }`}
                    >
                      <img
                        src={productImages[index]}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {selectedImageIndex === index && (
                        <div className="absolute inset-0 bg-orange-400/20"></div>
                      )}
                      {/* Progress indicator for auto-slide */}
                      {selectedImageIndex === index && isAutoSliding && (
                        <div className="absolute bottom-0 left-0 h-1 bg-orange-400 rounded-b-lg transition-all duration-300"
                          style={{
                            width: `${(autoSlideProgress / AUTO_SLIDE_INTERVAL) * 100}%`
                          }}>
                        </div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right - Scrollable Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 lg:space-y-10"
          >
            {/* Professional Product Title */}
            <div className="space-y-4 sm:space-y-6">
              <div className="">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
                  Sacred Power of Karungali
                </h1>
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-orange-400 to-transparent mt-2"></div>
                <p className="text-black text-base sm:text-lg leading-relaxed mt-3">
                  One Karungali Mala can change your destiny — protection, prosperity, and peace, all in your hands.
                </p>
              </div>
              {/* Professional Rating Display */}
              <div className="flex items-center justify-between py-2 sm:py-1 px-3 sm:px-1 bg-gradient-to-r from-orange-900/50 via-red-800/30 to-orange-900/50 rounded-xl border border-orange-400/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="flex text-yellow-400 text-base sm:text-lg">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-yellow-200 font-semibold text-base sm:text-lg">5.0</span>
                </div>
                <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"></div>
                <span className="text-yellow-100/70 font-medium text-sm sm:text-base">1000+ Devotees</span>
              </div>
            </div>
            {/* Professional Pricing */}
            <div className="bg-gradient-to-br from-orange-900/80 via-red-800/60 to-orange-900/80 border border-orange-400/30 rounded-xl sm:rounded-2xl p-4 sm:p-1 backdrop-blur-sm">
              <div className="space-y-6 sm:space-y-8 p-2 sm:p-0">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl sm:text-5xl font-bold text-yellow-400 tracking-tight">₹1,490</div>
                    <div className="text-lg sm:text-xl text-yellow-100/60 line-through">₹2,999</div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-orange-400/20">
                    <span className="text-yellow-100/80 text-sm sm:text-base">Authentic Karungali Mala & Bracelet</span>
                    <span className="font-semibold text-yellow-200 text-sm sm:text-base">₹1,490</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-orange-400/20">
                    <span className="text-yellow-100/80 text-sm sm:text-base">Premium Packaging</span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3">
                    <span className="text-yellow-100/80 text-sm sm:text-base">Sacred Shipping</span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">FREE</span>
                  </div>
                </div>
                {/* Professional Action Buttons */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-base sm:text-lg text-center tracking-wide"
                    onClick={handleBuyNow}
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='px-4 sm:px-6 lg:px-10'>
          {/* Extended Content for Scrolling */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900">Sacred Heritage</h3>
            <div className="space-y-3 sm:space-y-4 text-yellow-800 leading-relaxed text-sm sm:text-base">
              <p>
                Karungali, known as sacred ebony wood, has been revered in ancient Indian traditions for millennia.
                This divine material naturally absorbs and transforms negative energies while enhancing spiritual consciousness.
              </p>
              <p>
                Each bead is carefully selected from naturally fallen branches, ensuring ethical sourcing while maintaining
                the wood's inherent sacred properties. The deep black color represents the absorption of negativity and
                the protection of divine light.
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-5">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900">Spiritual Significance</h3>
            <div className="space-y-3 sm:space-y-4 text-yellow-800 leading-relaxed text-sm sm:text-base">
              <p>
                In Vedic traditions, Karungali is considered one of the most powerful protective materials.
                It is believed to shield the wearer from evil eye, negative influences, and spiritual disturbances.
              </p>
              <p>
                Regular use of Karungali malas during meditation and prayer enhances focus, promotes inner peace,
                and accelerates spiritual growth. The wood's natural vibrations align with higher consciousness frequencies.
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-5">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900">How to Use</h3>
            <div className="space-y-3 sm:space-y-4 text-yellow-800 leading-relaxed text-sm sm:text-base">
              <p>
                Wear your Karungali mala during meditation, prayer, or daily activities for continuous protection.
                The sacred wood works best when in direct contact with your skin, allowing its energy to merge with yours.
              </p>
              <p>
                For maximum benefit, hold the mala while chanting mantras or during spiritual practices.
                The beads will gradually absorb your positive intentions and amplify their power.
              </p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-5">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900">Care Instructions</h3>
            <div className="space-y-3 sm:space-y-4 text-yellow-800 leading-relaxed text-sm sm:text-base">
              <p>
                Keep your Karungali mala in a clean, sacred space when not in use. Avoid exposure to harsh chemicals
                or excessive moisture. The natural wood may develop a beautiful patina over time, enhancing its spiritual potency.
              </p>
              <p>
                Periodically cleanse your mala by placing it in sunlight or moonlight for a few hours.
                This helps maintain its energy and removes any accumulated negative vibrations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-3 px-6 mt-5 flex flex-col md:flex-row'>
        <div>
          <img src={wood} alt="Wood Image" className="w-full " />
          <div className="mt-5">
            <p>
              Karungali wood (Ebony wood) is taken from old trees and carefully shaped by hand into pooja sticks. Before making, the wood is offered in prayer so it becomes pure and blessed. These sticks are used near God during pooja, meditation, and rituals like milk abhishekam, camphor, and sandal paste offering. In temples like Pathala Murugan, Karungali has been used since ancient Chola and Vijayanagara times for its strength and spiritual power. Today, these pooja sticks are shared with devotees, bringing protection, peace, and divine energy into their homes.
            </p>
          </div>
        </div>
        <img src={god} alt="God Image" className="w-full h-[25rem]" />
      </div>
    </section>
  );
};

export default Product;
