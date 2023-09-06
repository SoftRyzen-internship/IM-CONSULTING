import { Container } from '@/components/Container';
import { ServicesCardList } from '@/components/ServicesCardList';
import { labelToLink } from '@/helpers';

export const Services = () => {
  const id = labelToLink('Послуги');
  return (
    <section id={id} className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <ServicesCardList />
      </Container>
    </section>
  );
};
