import services from '@/data/home/services.json';
import { ServicesCard } from '../ServicesCard';

import services1 from '/public/images/services/services1.jpg';
import services2 from '/public/images/services/services2.jpg';
import services3 from '/public/images/services/services3.jpg';

export const ServicesCardList = () => {
  const { cards, text, btnText } = services;
  const images = [services1, services2, services3];

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
            index={index}
          />
        ))}
      </ul>
    </>
  );
};
