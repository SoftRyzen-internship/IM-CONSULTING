'use client';

import React from 'react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import data from '@/data/home/partners.json';

export const PartnersSwiper = () => {
  const swiperParams = {
    modules: [Autoplay],
    loop: true,
    autoplay: true,
    variableWidth: true,
    wrapperTag: 'ul',
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
      1280: {
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
          className={`w-[${
            partner.width * 0.25
          }px] h-[24px] md:h-[36px] xl:h-[48px] my-[60px] md:my-[80px] xl:my-[120px]`}
          style={{ width: partner.width * 0.25 }}
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            width={partner.width * 0.25}
            height={partner.height}
            quality={100}
            className={`w-[${
              partner.width * 0.25
            }px] h-[24px] md:h-[36px] xl:h-[48px]`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
