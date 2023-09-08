import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import consulting from '@/data/services/consulting.json';

export const ConsultingInfo = () => {
  return (
    <section className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">{consulting.title}</h2>
        <Accordion items={consulting.items} />
      </Container>
    </section>
  );
};
