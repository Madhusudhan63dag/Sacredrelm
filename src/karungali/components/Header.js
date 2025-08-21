import React, { useState, useEffect } from 'react';
import banner1 from '../assets/1.webp';
import banner2 from '../assets/2.webp'; 
import banner3 from '../assets/3.webp';
import bannermobile4 from '../assets/4.webp'
import bannermobile5 from '../assets/5.webp';
import bannermobile6 from '../assets/6.webp';
import bannermobile7 from '../assets/7.webp';


import Slider from 'react-slick';


const Header = () => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };
  
  return (
       <section className="relative w-full overflow-hidden mt-5  md:mt-10">
                      {/* Mobile Banner - Only visible on small screens */}
                      <div className="mobile-banner-container">
                          <Slider {...settings}>
                              <div className="banner-slide">
                                  <img src={bannermobile4} alt="Mobile Banner 1" className="w-full" />
                              </div>
                              <div className="banner-slide">
                                  <img src={bannermobile5} alt="Mobile Banner 2" className="w-full" />
                              </div>
                              <div className="banner-slide">
                                  <img src={bannermobile6} alt="Mobile Banner 3" className="w-full" />
                              </div>
                              <div className="banner-slide">
                                  <img src={bannermobile7} alt="Mobile Banner 4" className="w-full" />
                              </div>
                          </Slider>
                      </div>
                      
                      {/* Desktop Slider - Hidden on small screens */}
                      <div className="desktop-banner-container">
                          <Slider {...settings}>
                              <div className="banner-slide">
                                  <img src={banner1} alt="Banner 1" />
                              </div>
                              <div className="banner-slide">
                                  <img src={banner2} alt="Banner 2" />
                              </div>
                              <div className="banner-slide">
                                  <img src={banner3} alt="Banner 3" />
                              </div>
                          </Slider>
                      </div>            
                  </section>
  );
};

export default Header;
