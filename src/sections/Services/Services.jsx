import { Container } from '@/components/Container';
import { ServicesCardList } from '@/components/ServicesCardList';

export const Services = () => {
  return (
    <section
      id="services"
      className="bg-black py-[60px] md:py-[80px] xl:py-[120px]"
    >
      <Container>
        <ServicesCardList />
      </Container>
    </section>
  );
};
