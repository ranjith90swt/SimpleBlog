import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Banner1 from '../assets/banner1.jpg';
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <>
    <Swiper
     modules={[Navigation, Autoplay]}
      spaceBetween={0}
      autoplay={{delay:4000, disableOnInteraction: false}}
      slidesPerView={1}
      navigation
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Banner1}  className="w-full " alt="" /></SwiperSlide>
      <SwiperSlide><img src={Banner1}  className="w-full " alt="" /></SwiperSlide>
     
    </Swiper>
        
    </>
  )
}

export default Banner