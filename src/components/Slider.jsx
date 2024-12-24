/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import B01 from '/portfolio1.png'
import B02 from '/portfolio2.png'
import B03 from '/portfolio3.png'
import B04 from '/rahul.png'
import B05 from '/reel vl.png'

import 'swiper/css';
import { Link } from 'react-router';

const Slider = () => {
  return (
    <div className='slider-container'>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      breakpoints={{      
        0: {
          slidesPerView: 1,
        },
        400:{
          slidesPerView:1,
        },
        639: {
          slidesPerView: 3,
        },

      }}
      coverflowEffect={{
        rotate: 0,
        stretch: -50,
        depth: 90,
        modifier: 2.5,
        slideShadows: false
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[Autoplay,EffectCoverflow, Navigation]}
      >
        <SwiperSlide><Link to={'motion_graphic'}><img className='w-full object-cover rounded-[5vw]' src={B01} alt="motion graphic" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'podcast'}><img className='w-full object-cover rounded-[5vw]' src={B02} alt="podcast" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'trailer_teaser'}><img className='w-full object-cover rounded-[5vw]' src={B03} alt="trailer_teaser" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'explainer_video'}><img className='w-full object-cover rounded-[5vw]' src={B04} alt="explainer_video" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'short_video'}><img className='w-full object-cover rounded-[5vw]' src={B05} alt="short_video" /></Link></SwiperSlide>

        <div className='slider-nav relative bottom-0 z-50 mt-10 flex items-center justify-center gap-10'>
        <div className='swiper-button-prev cursor-pointer border border-black rounded-full'>
        <GoArrowLeft size={20} /> 
        </div>
        <div className='swiper-button-next cursor-pointer border border-black rounded-full'>
            <GoArrowRight size={20} />
        </div>
      </div>

      </Swiper>
      
    </div>
  );
}

export default Slider;

