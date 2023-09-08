'use client';

import React from 'react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '@/data/home/partners.json';

export const PartnersSwiper = () => {
  const swiperParams = {
    loop: true,
    autoplay: true,    
    modules: [Autoplay],
    wrapperTag: 'ul',
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 7,
        spaceBetween: 64,
      },
    },
  };

  return (
    <Swiper {...swiperParams}>
      {data.partners.map(partner => (
        <SwiperSlide
          key={partner.alt}
          tag="li"
          className=""
        >
          <Image src={partner.src} alt={partner.alt} width={105} height={24}/>          
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
