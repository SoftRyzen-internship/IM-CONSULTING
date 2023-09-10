'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import data from '@/data/home/partners.json';

export const PartnersSwiper = () => {
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
      {data.partners.map(partner => (
        <Image
          key={partner.alt}
          src={partner.src}
          alt={partner.alt}
          width={partner.width}
          height={partner.height}
          quality={100}
          className={`w-[${partner.width * 0.25}px] md:w-[${
            partner.width * 0.375
          }px] xl:w-[${
            partner.width * 0.5
          }px] h-[24px] md:h-[36px] xl:h-[48px] object-contain object-left my-[60px] md:my-[80px] xl:my-[120px] pr-[20px] md:pr-[32px] xl:pr-[64px]`}
        />
      ))}
    </Slider>
  );
};
