'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import data from '@/data/home/partners.json';

export const PartnersSwiper = () => {
  const swiperParams = {
    modules: [Autoplay],
    infinite: true,
    loop: true,    
    slidesPerView: 4,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 7,
      },
    },
  };

  return (
    <div className="partners-swiper">
      <Swiper {...swiperParams}>
        {data.partners.map(partner => (
          <SwiperSlide
            key={partner.alt}
            className={`w-[${partner.width * 0.25}px] md:w-[${
              partner.width * 0.375
            }px] xl:w-[${
              partner.width * 0.5
            }px] h-[24px] md:h-[36px] xl:h-[48px] my-[60px] md:my-[80px] xl:my-[120px] mr-[20px] md:mr-[32px] xl:mr-[64px]`}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={partner.width}
              height={partner.height}
              quality={100}
              className="h-[24px] w-min md:h-[36px] xl:h-[48px] object-contain object-left"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
