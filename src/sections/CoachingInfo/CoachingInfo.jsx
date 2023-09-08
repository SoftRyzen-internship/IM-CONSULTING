import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import { title, items } from '@/data/services/coachingInfo.json';

export const CoachingInfo = () => {
  return (
    <section className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">{title}</h2>
        <Accordion items={items} />
      </Container>
    </section>
  );
};
