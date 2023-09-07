import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import consulting from '@/data/services/consulting.json';

export const Test = () => {
  return (
    <section className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <Accordion items={consulting} />
      </Container>
    </section>
  );
};
