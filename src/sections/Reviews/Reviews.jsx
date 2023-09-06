'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import './styles.css';

import { Scrollbar } from 'swiper/modules';
import { Container } from '@/components/Container';
import { ReviewCard } from '@/components/ReviewCard';
import { labelToLink } from '@/helpers';

import data from '@/data/data.json';
const { reviews } = data;

export const Reviews = () => {
  const id = labelToLink('Відгуки');

  const swiperParams = {
    loop: true,
    scrollbar: {
      draggable: true,
    },
    modules: [Scrollbar],
    className: 'ReviewsSwiper',
    wrapperTag: 'ul',
    autoHeight: true,
    spaceBetween: 24,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  };

  return (
    <section id={id} className="py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">Reviews</h2>
        <Swiper {...swiperParams}>
          {reviews.map(({ name, ...rest }) => (
            <SwiperSlide
              key={name}
              tag="li"
              className="font-light pb-[37px] md:pb-[61px] xl:pb-[67px] cursor-swiper"
            >
              <ReviewCard name={name} {...rest} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
