import React, { useRef } from 'react';
import about from '../assets/product4.webp';
import product from '../assets/proof.webp';

const About = () => {
  const sealRef = useRef(null);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-orange-400 via-orange-200 to-yellow-400"
    >
      {/* Floating Sacred Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-bounce" />
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-yellow-500 rounded-full opacity-80 animate-bounce" />
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-70 animate-bounce" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-bounce" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl text-black mb-6 tracking-tight">
            Sacred Power of Karungali
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6" />
        </div>

        {/* Section 1: Essence of Gita Set */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-5">
          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Karungali – The Sacred Ebony of Protection &amp; Power
            </h3>
            <div className="space-y-4 text-black text-lg leading-relaxed">
              <div className="space-y-3">
                <div>
                  <strong>Evil Eye &amp; Negativity Shield</strong> – For centuries,
                  Karungali has been trusted to absorb bad energies, protect
                  against black magic, and safeguard the aura of the wearer.
                </div>

                <div>
                  <strong>Spiritual Energy Amplifier</strong> – Wearing
                  Karungali helps you stay connected to divine vibrations,
                  enhancing meditation, focus, and intuition.
                </div>

                <div>
                  <strong>Health &amp; Mind Benefits</strong> – Believed to reduce
                  stress, control anger, stabilize emotions, and promote
                  peaceful sleep.
                </div>

                <div>
                  <strong>Rare &amp; Authentic</strong> – Naturally formed black
                  ebony wood, aged over decades, makes every piece unique and
                  spiritually charged.
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-100/70 rounded-lg border-l-4 border-orange-500">
                <p className="font-semibold text-lg mb-2">
                  <strong>Why You Should Not Delay</strong>
                </p>
                <ul className="space-y-2">
                  <li>
                    • Every moment without Karungali leaves you exposed to
                    unseen negative forces.
                  </li>
                  <li>
                    • It is not just an accessory—it's a sacred shield and
                    prosperity magnet you carry for life.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image resizes to match text height */}
          <div className="relative self-start">
            <img
              src={about}
              alt="Sacred Karungali"
              className="w-full h-[35rem] object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Section 2: Seal of Trust */}
        <div
          ref={sealRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-5"
        >
          <div className="relative flex justify-center items-center self-start">
            <img
              src={product}
              alt="Certificate of Authenticity"
              className="w-2/3 h-[35rem]  object-contain rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-5xl font-bold text-black mb-6">
              Certificate of Authenticity
            </h3>
            <div className="space-y-4 text-black text-lg leading-relaxed mb-6">
              <p>
                Every Sacred Relm product comes with an official Certificate of
                Authenticity, ensuring you receive genuine spiritual artifacts
                crafted with traditional methods and blessed materials.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Verified genuine Karungali wood authenticity',
                'Traditional craftsmanship certification',
                'Spiritual blessing and energization confirmation',
                'Quality assurance and material verification',
                'Lifetime authenticity guarantee',
              ].map((certification, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-zinc-900/30 rounded-lg border-l-4 border-orange-500"
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
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

        {/* Banner Section */}
        <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/6PMUFp71RDg?rel=0&amp;autoplay=0&amp;mute=0&amp;controls=1"
            title="Sacred Collection Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default About;
