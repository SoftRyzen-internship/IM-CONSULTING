import React from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import { ReviewCard } from '../ReviewCard';
import '@/styles/swiper-scrollbar.css';
import reviews from '@/data/home/reviews.json';

export const ReviewSwiper = () => {
  const swiperParams = {
    scrollbar: {
      draggable: true,
    },
    modules: [Scrollbar],
    wrapperTag: 'ul',
    className: 'review-swiper',
    spaceBetween: 24,
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
    <div className="overflow-x-clip">
      <Swiper {...swiperParams}>
        {reviews.map(({ name, ...rest }) => (
          <SwiperSlide key={name} tag="li" className="font-light cursor-swiper">
            <ReviewCard name={name} {...rest} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
