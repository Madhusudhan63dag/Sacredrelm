import React, { useState } from 'react';
import about from '../assets/product4.webp';
// import careful from '../assets/careful.webp';
// import pre from '../assets/package.webp';
import banner4 from '../assets/4.webp';
import product from '../assets/proof.webp';

const About = () => {
  const [activeTab, setActiveTab] = useState('heritage');

  return (
    <section id="about" className="relative bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-400">
      {/* Floating Sacred Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-yellow-500 rounded-full opacity-80 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Hexagonal Header Design */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tight">
            Sacred Power of Karungal
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        {/* Interactive Tab System */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="flex bg-zinc-900/50 rounded-full p-2 border border-orange-500/30">
              {[
                { id: 'heritage', label: 'Essence of Gita Set' },
                { id: 'power', label: 'Seal of Trust' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-orange-500 text-black shadow-lg'
                      : 'text-yellow-200 hover:text-yellow-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'heritage' && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-6">Ancient Sacred Wood</h3>
                  <div className="space-y-4 text-black text-lg leading-relaxed">
                    <p>
                      Karungali, the sacred black ebony wood, has been revered for centuries in Indian spiritual traditions. 
                      This divine material is believed to absorb negative energies and provide powerful protection.
                    </p>
                    <p>
                      Each piece carries the wisdom of ancient trees, naturally blackened through time, 
                      making it a perfect conduit for spiritual energy and divine blessings.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="">
                    <img src={about} alt="Sacred Karungali" className="w-full h-full object-contain rounded-lg" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'power' && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="order-2 md:order-1 relative">
                  <div className="">
                    <img src={product} alt="Certificate of Authenticity" className="w-full h-full object-contain rounded-lg" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-black mb-6">Certificate of Authenticity</h3>
                  <div className="space-y-4 text-black text-lg leading-relaxed mb-6">
                    <p>
                      Every Sacred Relm product comes with an official Certificate of Authenticity, 
                      ensuring you receive genuine spiritual artifacts crafted with traditional methods and blessed materials.
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {[
                      'Verified genuine Karungali wood authenticity',
                      'Traditional craftsmanship certification',
                      'Spiritual blessing and energization confirmation',
                      'Quality assurance and material verification',
                      'Lifetime authenticity guarantee'
                    ].map((certification, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-zinc-900/30 rounded-lg border-l-4 border-orange-500">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-black">{certification}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-orange-100/50 rounded-lg border border-orange-400">
                    <p className="text-black font-semibold text-center">
                      🏆 ISO Certified | 🔒 100% Authentic | ✨ Spiritually Blessed
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Geometric Banner Section */}
        <div className="">
          <div className="relative overflow-hidden">
            <div className="">
              <img
                src={banner4}
                alt="Sacred Collection"
                className="w-full h-48 sm:h-64 md:h-80 lg:h-[28rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hexagon {
          width: 120px;
          height: 104px;
          position: relative;
          margin: 52px auto;
        }
        .hexagon:before,
        .hexagon:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
        }
        .hexagon:before {
          bottom: 100%;
          border-bottom: 30px solid rgba(249, 115, 22, 0.4);
        }
        .hexagon:after {
          top: 100%;
          border-top: 30px solid rgba(249, 115, 22, 0.4);
        }
        .diamond-frame {
          width: 400px;
          height: 400px;
          transform: rotate(45deg);
          overflow: hidden;
          border: 3px solid rgba(249, 115, 22, 0.4);
          margin: 40px auto;
        }
        .diamond-frame img {
          transform: rotate(-45deg) scale(1.4);
          transform-origin: center;
        }
        .triangle-clip {
          clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
          position: relative;
        }
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;
