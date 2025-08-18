import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Review = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Animated counters state
  const [counters, setCounters] = useState({
    rating: 0,
    customers: 0,
    protection: 0,
    visited: 0
  });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isStatsInView) {
      const animateCounter = (target, current, setter, increment, max) => {
        if (current < target) {
          const newValue = Math.min(current + increment, target);
          setter(prev => ({ ...prev, [max]: newValue }));
          setTimeout(() => animateCounter(target, newValue, setter, increment, max), 50);
        }
      };

      // Animate rating (5.0)
      animateCounter(5.0, 0, setCounters, 0.1, 'rating');
      
      // Animate customers (1000+)
      animateCounter(1000, 0, setCounters, 25, 'customers');
      
      // Animate protection (100%)
      animateCounter(100, 0, setCounters, 2, 'protection');

      // Animate visited (5000+)
      animateCounter(5000, 0, setCounters, 100, 'visited');
    }
  }, [isStatsInView]);

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      review: "The Karungali mala has transformed my spiritual practice. I feel protected from negative energies and my meditation has deepened significantly. Truly blessed experience!",
      verified: true,
      date: "2 weeks ago",
      benefit: "Spiritual Protection"
    },
    {
      id: 2,
      name: "Priya Nair",
      location: "Kochi, Kerala",
      rating: 5,
      review: "Amazing sacred energy! I wear my Karungali bracelet daily and notice immediate peace of mind. The negative thoughts have reduced remarkably.",
      verified: true,
      date: "1 month ago",
      benefit: "Mental Peace"
    },
    {
      id: 3,
      name: "Venkatesh Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      review: "This authentic Karungali mala is powerful! My business has improved, family harmony increased, and I feel divinely protected every day.",
      verified: true,
      date: "3 weeks ago",
      benefit: "Divine Blessings"
    },
    {
      id: 4,
      name: "Dr. Lakshmi Rao",
      location: "Bangalore, Karnataka",
      rating: 5,
      review: "As someone who studies sacred geometry, I can confirm this Karungali is genuine. The energy vibrations are exceptional and spiritually uplifting.",
      verified: true,
      date: "1 week ago",
      benefit: "Authentic Quality"
    },
    {
      id: 5,
      name: "Arun Krishnan",
      location: "Coimbatore, Tamil Nadu",
      rating: 5,
      review: "Incredible protection from evil eye! Since wearing this sacred Karungali, negative people avoid me and positive opportunities flow naturally.",
      verified: true,
      date: "2 months ago",
      benefit: "Evil Eye Protection"
    },
    {
      id: 6,
      name: "Meera Menon",
      location: "Thiruvananthapuram, Kerala",
      rating: 5,
      review: "Best spiritual investment! Mental clarity improved, obstacles removed, and divine grace flows. This sacred wood truly works miracles.",
      verified: true,
      date: "3 weeks ago",
      benefit: "Obstacle Removal"
    },
    {
      id: 7,
      name: "Suresh Iyer",
      location: "Madurai, Tamil Nadu",
      rating: 5,
      review: "This Karungali mala strengthened my connection to divine energy. Prayers are answered faster and spiritual growth accelerated significantly.",
      verified: true,
      date: "1 month ago",
      benefit: "Spiritual Growth"
    },
    {
      id: 8,
      name: "Kavitha Pillai",
      location: "Mangalore, Karnataka",
      rating: 5,
      review: "Powerful protection and prosperity! My husband's career improved, children's studies enhanced, and home filled with positive vibrations.",
      verified: true,
      date: "2 weeks ago",
      benefit: "Family Prosperity"
    }
  ];

  // Continuous infinite scroll - no stopping, no hover pause
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    const scrollSpeed = isMobile ? 1 : 1.5; // Consistent speed

    const continuousScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset when we've scrolled through one full set of reviews
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScrollLeft / 3) { // Since we have 3 sets
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(continuousScroll);
    };

    // Start continuous scrolling immediately
    animationFrame = requestAnimationFrame(continuousScroll);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isMobile]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm sm:text-lg ${
          index < rating ? 'text-yellow-400' : 'text-zinc-600'
        }`}
      >
        ★
      </span>
    ));
  };

  // Motion configuration optimized for mobile
  const motionConfig = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-50px" },
    transition: { 
      duration: isMobile ? 0.3 : 0.5,
      ease: "easeOut"
    }
  };

  return (
    <section id="reviews" className=" bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-400 relative overflow-hidden min-h-screen">
      {/* Sacred Background Elements - Responsive */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-32 right-10 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-radial from-yellow-400/15 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Sacred Pattern Overlay - Hidden on mobile, visible on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="sacred-dots-desktop" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor" className="text-orange-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sacred-dots-desktop)"/>
          </svg>
        </div>
      )}

      <div className="relative z-10">
        {/* Sacred Header - Mobile Optimized */}
        <motion.div
          {...motionConfig}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif leading-tight tracking-tight px-2">
            Thousands trust Karungali for protection and growth 
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">
              don’t miss your chance
            </span>
          </h2>
        </motion.div>

        {/* Continuous Scrolling Sacred Reviews - No Stopping */}
        <div className="relative max-w-full overflow-hidden mb-8 sm:mb-16">
          
          {/* Infinite Scrolling Sacred Reviews */}
          <div
            ref={scrollRef}
            className="flex space-x-3 sm:space-x-6 overflow-hidden py-4 px-2"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Triple the reviews for seamless infinite scroll */}
            {[...reviews, ...reviews, ...reviews].map((review, index) => (              
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-80 md:w-96 max-w-[calc(100vw-2rem)] bg-gradient-to-br from-orange-900/60 via-red-800/40 to-orange-900/60 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-500/20 backdrop-blur-sm transition-all duration-300 shadow-lg"
              >
                {/* Sacred Corner Decorations */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-3 sm:w-5 h-3 sm:h-5 border-t-2 border-l-2 border-yellow-400/50"></div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-3 sm:w-5 h-3 sm:h-5 border-t-2 border-r-2 border-yellow-400/50"></div>
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 w-3 sm:w-5 h-3 sm:h-5 border-b-2 border-l-2 border-yellow-400/50"></div>
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-3 sm:w-5 h-3 sm:h-5 border-b-2 border-r-2 border-yellow-400/50"></div>

                {/* Benefit Badge */}
                <div className="mb-3 sm:mb-4">
                  <span className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-orange-500/20 to-yellow-600/10 border border-orange-400/30 rounded-full text-orange-300 text-xs sm:text-sm font-medium tracking-wide">
                    {review.benefit}
                  </span>
                </div>

                {/* Sacred Rating */}
                <div className="flex items-center justify-center mb-3 sm:mb-4 p-2 sm:p-3 bg-gradient-to-r from-red-800/50 to-orange-700/30 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-1 sm:gap-2">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-yellow-200 font-semibold text-sm sm:text-base">({review.rating}/5)</span>
                  </div>
                </div>

                {/* Sacred Review Text */}
                <div className="mb-4 sm:mb-6 relative">
                  <div className="absolute -top-1 -left-1 text-xl sm:text-3xl text-orange-400/30 font-serif">"</div>
                  <p className="text-yellow-100/90 text-xs sm:text-sm leading-relaxed pl-3 sm:pl-5 font-light">
                    {isMobile ? (review.review.length > 100 ? review.review.substring(0, 100) + '...' : review.review) : review.review}
                  </p>
                  <div className="absolute -bottom-2 -right-1 text-xl sm:text-3xl text-orange-400/30 font-serif rotate-180">"</div>
                </div>

                {/* Sacred Customer Info */}
                <div className="border-t border-orange-500/20 pt-3 sm:pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <h4 className="font-bold text-yellow-200 text-sm sm:text-base">{review.name}</h4>
                        {review.verified && (
                          <div className="w-3 sm:w-5 h-3 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-black text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-yellow-100/60 text-xs mb-1">{review.location}</p>
                      <p className="text-yellow-100/40 text-xs">{review.date}</p>
                    </div>
                    
                    {/* Sacred Verification */}
                    <div className="text-center">
                      <div className="w-6 sm:w-10 h-6 sm:h-10 bg-gradient-to-br from-orange-500/20 to-yellow-600/10 rounded-lg flex items-center justify-center mb-1 border border-orange-400/30">
                        <div className="w-3 sm:w-5 h-3 sm:h-5 border border-orange-400/60 rounded-full flex items-center justify-center">
                          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-orange-400 rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-xs text-orange-300 font-medium tracking-wide">BLESSED</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Sacred Statistics - Running Numbers */}
        <motion.div
          ref={statsRef}
          {...motionConfig}
          className="mb-8 sm:mb-16 bg-gradient-to-br from-orange-900/80 via-red-800/60 to-orange-900/80 border border-orange-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm relative overflow-hidden mx-2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-4xl font-bold text-yellow-400 tracking-tight">
                {counters.rating.toFixed(1)}/5
              </div>
              <div className="text-yellow-100/70 font-medium tracking-wide text-xs sm:text-sm">Sacred Rating</div>
              <div className="w-6 sm:w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-4xl font-bold text-yellow-400 tracking-tight">
                {Math.floor(counters.customers).toLocaleString()}+
              </div>
              <div className="text-yellow-100/70 font-medium tracking-wide text-xs sm:text-sm">Total Orders</div>
              <div className="w-6 sm:w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-4xl font-bold text-yellow-400 tracking-tight">
                {Math.floor(counters.protection)}%
              </div>
              <div className="text-yellow-100/70 font-medium tracking-wide text-xs sm:text-sm">Delivery</div>
              <div className="w-6 sm:w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-4xl font-bold text-yellow-400 tracking-tight">
                {Math.floor(counters.visited).toLocaleString()}+
              </div>
              <div className="text-yellow-100/70 font-medium tracking-wide text-xs sm:text-sm">Website Visitor</div>
              <div className="w-6 sm:w-12 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
            </div>
          </div>
        </motion.div>

        {/* Sacred CTA Section - Mobile Optimized */}
        <motion.div
          {...motionConfig}
          className="text-center bg-gradient-to-br from-orange-900/60 via-red-800/40 to-orange-900/60 border border-orange-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-8 backdrop-blur-sm relative overflow-hidden mx-2"
        >
          {/* <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5"></div> */}
          
          <div className="relative space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-orange-300 text-xs sm:text-sm font-medium tracking-widest uppercase">Join the Sacred Circle</span>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white font-serif mb-3 sm:mb-4 tracking-tight px-2">
              Begin Your Sacred Journey
            </h3>
            
            <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-4 sm:mb-6"></div>
            
            <p className="text-yellow-100/80 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Experience the same divine protection and spiritual transformation that thousands of blessed souls celebrate daily
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="/checkout"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-transparent border-2 border-orange-400/60 text-orange-300 font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-full hover:bg-orange-400/10 hover:border-orange-400 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide"
              >
                <span>Order Sacred Protection</span>
                <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced global styles for continuous scrolling */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        /* Hide scrollbar completely */
        #reviews .flex::-webkit-scrollbar {
          display: none;
        }
        
        /* Prevent horizontal overflow */
        * {
          box-sizing: border-box;
        }

        /* Optimize for continuous scrolling performance */
        @media (max-width: 768px) {
          * {
            transform: translateZ(0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default Review;
