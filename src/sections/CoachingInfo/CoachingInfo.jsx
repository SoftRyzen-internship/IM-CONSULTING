import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import coaching from '@/data/services/coaching.json';

export const CoachingInfo = () => {
  return (
    <section className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">{coaching.title}</h2>
        <Accordion items={coaching.items} />
      </Container>
    </section>
  );
};
