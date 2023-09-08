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
      480: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
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
          className="h-[24px] md:h-[36px] xl:h-[48px] my-[60px] md:my-[80px] xl:my-[120px]"
        >         
            <Image
              src={partner.src}
              alt={partner.alt}
              width={108}
              height={24} 
              quality={100}
              className="w-full h-[24px] md:h-[36px] xl:h-[48px]"             
            />          
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
