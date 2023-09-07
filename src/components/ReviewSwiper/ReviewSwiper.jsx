import React from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { ReviewCard } from '../ReviewCard';
import reviews from '@/data/home/reviews.json';
import '@/styles/swiper-scrollbar.css';

export const ReviewSwiper = () => {
  const swiperParams = {
    loop: true,
    scrollbar: {
      draggable: true,
    },
    modules: [Scrollbar],
    wrapperTag: 'ul',
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  };

  return (
    <Swiper {...swiperParams}>
      {reviews.map(({ name, ...rest }) => (
        <SwiperSlide
          key={name}
          tag="li"
          className="font-light pb-[44px] md:pb-[68px] xl:pb-[74px] cursor-swiper"
        >
          <ReviewCard name={name} {...rest} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ReviewSwiper.propTypes = {};
