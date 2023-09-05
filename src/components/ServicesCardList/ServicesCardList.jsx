import data from '@/data/data.json';
import { ServicesCard } from '../ServicesCard/ServicesCard';
import first from '/public/images/services/Photo.jpg';
import sec from '/public/images/services/Photo (1).jpg';
import third from '/public/images/services/Photo (2).jpg';
export const ServicesCardList = () => {
  const { services } = data;
  const { title, cards, text, btnText } = services;
  const images = [first, sec, third];
  return (
    <>
      <h2 className="hidden">{title}</h2>
      <div className="flex flex-col gap-[16px] justify-center md:flex-row md:gap-[12px]">
        {cards.map((cardTitle, index) => (
          <ServicesCard
            key={index}
            title={cardTitle}
            image={images[index]}
            text={text[index]}
            btnText={btnText}
          />
        ))}
      </div>
    </>
  );
};
