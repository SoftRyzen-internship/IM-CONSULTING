import { Container } from '@/components/Container';
import { PartnersSwiper } from '@/components/PartnersSwiper';
import data from '@/data/home/partners.json';

export const Partners = () => {
  return (
    <section className="bg-black">
      <Container className='partners'>
        <h2 className="visually-hidden">{data.title}</h2>
        <PartnersSwiper />
      </Container>
    </section>
  );
};
