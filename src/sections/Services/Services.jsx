import services from '@/data/home/services.json';

import { Container } from '@/components/Container';
import { ServicesCardList } from '@/components/ServicesCardList';
import { labelToLink } from '@/utils/labelToLink';

export const Services = () => {
  const id = labelToLink('Послуги');

  return (
    <section id={id} className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">{services.title}</h2>
        <ServicesCardList />
      </Container>
    </section>
  );
};
