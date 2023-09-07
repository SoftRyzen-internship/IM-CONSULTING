'use client';

import React from 'react';

import { Container } from '@/components/Container';
import { labelToLink } from '@/utils/labelToLink';
import { ReviewSwiper } from '@/components/ReviewSwiper';

export const Reviews = () => {
  const id = labelToLink('Відгуки');

  return (
    <section id={id} className="py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">Відгуки</h2>
        <ReviewSwiper />
      </Container>
    </section>
  );
};
