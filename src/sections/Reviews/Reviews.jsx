'use client';

import React from 'react';

import { Container } from '@/components/Container';
import { labelToLink } from '@/utils/labelToLink';
import { ReviewSwiper } from '@/components/ReviewSwiper';

export const Reviews = () => {
  const id = labelToLink('Відгуки');

  return (
    <section
      id={id}
      className="pt-[60px] md:pt-[80px] xl:pt-[120px] pb-[97px] md:pb-[141px] xl:pb-[186px] bg-bgColor overflow-hidden"
    >
      <Container>
        <h2 className="visually-hidden">Відгуки</h2>
        <ReviewSwiper />
      </Container>
    </section>
  );
};
