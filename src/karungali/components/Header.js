import React, { useState, useEffect } from 'react';
import banner1 from '../assets/1.webp';

import banner3 from '../assets/3.webp';
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
       <section className="relative w-full overflow-hidden mt-10">
                      {/* Mobile Banner - Only visible on small screens */}
                      <div className="mobile-banner-container">
                          <a href='/shop'>
                          <img src={banner1} alt="Mobile Banner" className="w-full" />
                          </a>
                      </div>
                      
                      {/* Desktop Slider - Hidden on small screens */}
                      <div className="desktop-banner-container">
                          <Slider {...settings}>
                              <div className="banner-slide">
                                  <img src={banner3} alt="Banner 1" />
                              </div>
                              <div className="banner-slide">
                                  <img src={banner1} alt="Banner 3" />
                              </div>
                          </Slider>
                      </div>            
                  </section>
  );
};

export default Header;
