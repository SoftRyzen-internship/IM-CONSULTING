'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { convertImage, toBase64 } from '@/utils/getBase64';
const BLUR_COLOR = '#414141';
import data from '@/data/home/partners.json';

export const PartnersSwiper = () => {
  const swiperParams = {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 4,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    lazyPreloadPrevNext: 1,
    breakpoints: {
      480: {
        slidesPerView: 5,
      },
      600: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 7,
      },
      1280: {
        slidesPerView: 8,
      },
    },
  };

  return (
    <Swiper {...swiperParams} className="partners-swiper swiper-no-swiping">
      {data.partners.map(partner => (
        <SwiperSlide
          key={partner.alt}
          className={`w-[${partner.width * 0.25}px] md:w-[${
            partner.width * 0.375
          }px] xl:w-[${
            partner.width * 0.5
          }px] h-[24px] md:h-[36px] xl:h-[48px] my-[60px] md:my-[80px] xl:my-[120px] pr-[20px] md:pr-[32px] xl:pr-[64px]`}
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            width={partner.width}
            height={partner.height}
            quality={100}
            className="h-[24px] w-min md:h-[36px] xl:h-[48px] object-contain object-left"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(partner.width, partner.height, BLUR_COLOR),
            )}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
