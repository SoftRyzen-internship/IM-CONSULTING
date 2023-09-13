import Promise from 'promise';

import services from '@/data/home/services.json';
import { ServicesCard } from '../ServicesCard';

import getBase64 from '@/utils/getBase64';

import services1 from '/public/images/services/services1.jpg';
import services2 from '/public/images/services/services2.jpg';
import services3 from '/public/images/services/services3.jpg';

export const ServicesCardList = async () => {
  const { cards, text, btnText } = services;
  const images = [services1, services2, services3];
  const imageNames = ['services1.jpg', 'services2.jpg', 'services3.jpg'];

  const blurDataURLs = await Promise.all(
    imageNames.map(async image => {
      const base64Data = await getBase64(
        `http://localhost:3000/images/services/${image}`,
      );
      return base64Data;
    }),
  );

  return (
    <>
      <ul className="flex flex-col gap-[16px] justify-center items-center md:flex-row md:gap-[12px] xl:gap-[20px]">
        {cards.map((cardTitle, index) => (
          <ServicesCard
            key={index}
            title={cardTitle}
            image={images[index]}
            text={text[index]}
            btnText={btnText}
            blurDataURL={blurDataURLs[index]}
          />
        ))}
      </ul>
    </>
  );
};
