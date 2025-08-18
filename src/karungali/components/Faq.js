import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqs = [
    {
      id: 1,
      question: "What is Karungali?",
      answer: "There is a tree called Karungali, which is not like neem tree, mango tree, etc., but rather a karangali tree imported from India. We use that tree to craft our products."
    },
    {
      id: 2,
      question: "What are the benefits of karungali?",
      answer: "The Karungali products store the cosmic energy so we have a constant supply of positive energy and when we are stressed they help us regain a normal view of the world."
    },
    {
      id: 3,
      question: "What is the original color of karungali?",
      answer: "The color of karungali is actually black, which is why it is called in Tamil karungali. The original color of karungali is dark brown, but if you see it deep it appears brown. If you cut different trees of karungali the color will literally differ."
    },
    {
      id: 4,
      question: "Who can use karungali products?",
      answer: "There are no restrictions on the use of this Karungali, and both men and women can use it. It can be used by people of all religions."
    },
    {
      id: 5,
      question: "How do you say it is beneficial?",
      answer: "A lot of older people use Karungali and it brings them relief from stress, increases business growth etc. There is no scientific proof, but there is a trust among old people, so it's worth a try."
    },
    {
      id: 6,
      question: "What is the pre procedure to use this made?",
      answer: "Whenever you buy Karungali or Karungali Products, it's a process of hands changing from production to quality checks and product packing. Karungali absorbs the positive energy from these hands changing. If it is cleared, the positive energy shown in sambrani powder and Dip in milk will disappear."
    },
    {
      id: 7,
      question: "Do's and don'ts of karungali?",
      answer: "Karungali Mala is not to be worn during the night. In the morning, after bathing, you wear it. Do not go to death houses while wearing it. If you go to a death house, you must show in sambrani or Dip in milk."
    },
    {
      id: 8,
      question: "Which age people can wear this?",
      answer: "When wearing Karungali, we can feel the positive energy and success from born babies to older people."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-400 relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-radial from-orange-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-radial from-red-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Sacred Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="sacred-faq-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="currentColor" className="text-red-600"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-faq-dots)"/>
        </svg>
      </div>

      <div className="relative z-10 px-6">
        {/* Sacred Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-red-900 mb-6 font-serif leading-tight tracking-tight">
            Frequently Asked
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-orange-700 to-red-800">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-red-900/20 via-orange-800/15 to-red-900/20 backdrop-blur-sm rounded-2xl border border-red-600/20 overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-red-800/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  {/* Sacred Number */}
                  <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-800 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-100 font-bold text-sm">{String(faq.id).padStart(2, '0')}</span>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-red-900 group-hover:text-red-800 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>

                {/* Sacred Toggle Icon */}
                <div className="flex-shrink-0 ml-4">
                  <div className={`w-8 h-8 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Sacred Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? 'auto' : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="pl-14">
                    <div className="bg-gradient-to-r from-orange-100/80 via-yellow-50/80 to-orange-100/80 rounded-xl p-6 border-l-4 border-red-600">
                      <p className="text-red-900/90 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
