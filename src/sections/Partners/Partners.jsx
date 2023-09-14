import { PartnersSwiper } from '@/components/PartnersSwiper';
import data from '@/data/home/partners.json';

export const Partners = () => {
  return (
    <section className="bg-black xl:z-20">
      <h2 className="visually-hidden">{data.title}</h2>
      <PartnersSwiper />
    </section>
  );
};
