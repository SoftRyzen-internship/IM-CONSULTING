import data from '@/data/data.json';

import { ServicesCard } from '../ServicesCard/ServicesCard';

import servicesFirstPhoto from '/public/images/services/servicesFirstPhoto.jpg';
import servicesSecondPhoto from '/public/images/services/servicesSecondPhoto.jpg';
import servicesThirdPhoto from '/public/images/services/servicesThirdPhoto.jpg';

export const ServicesCardList = () => {
  const { services } = data;
  const { title, cards, text, btnText } = services;
  const images = [servicesFirstPhoto, servicesSecondPhoto, servicesThirdPhoto];
  return (
    <>
      <h2 className="hidden">{title}</h2>
      <ul className="flex flex-col gap-[16px] justify-center items-center md:flex-row md:gap-[12px]">
        {cards.map((cardTitle, index) => (
          <ServicesCard
            key={index}
            title={cardTitle}
            image={images[index]}
            text={text[index]}
            btnText={btnText}
          />
        ))}
      </ul>
    </>
  );
};
