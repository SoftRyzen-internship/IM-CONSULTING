'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import './styles.css';

import { Scrollbar } from 'swiper/modules';
import { Container } from '@/components/Container';
import data from '@/data/data.json';
const { reviews } = data;

export const Reviews = () => {
  const scrollbar = {
    draggable: true,
  };

  return (
    <section id="reviews" className="py-[60px]">
      <Container>
        <h2>It is Reviews section</h2>
        <Swiper
          scrollbar={scrollbar}
          modules={[Scrollbar]}
          className="ReviewsSwiper"
          wrapperTag="ul"
        >
          {reviews.map(
            ({ rating, ratingText, company, post, name, review }) => (
              <SwiperSlide
                key={name}
                tag="li"
                className=" bg-slate-100 font-light pb-9"
              >
                <div className="flex justify-between  text-orange">
                  <p className=" text-[60px] leading-[73px] ">{rating}</p>
                  <div className="text-right">
                    <p className=" text-4xl leading-[44px] tracking-widest  ">
                      {ratingText}
                    </p>
                    <h3 className="">
                      [&nbsp;
                      <span className="text-black font-bold">{company}</span>
                      &nbsp;]
                    </h3>
                  </div>
                </div>
                <p className="text-right mb-2">
                  {post} <span className="font-medium">{name}</span>
                </p>
                <p className="text-justify">{review}</p>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </Container>
    </section>
  );
};
