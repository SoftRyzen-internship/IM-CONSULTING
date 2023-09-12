import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import trainings from '@/data/services/trainings.json';

export const ProgramInfo = () => {
  return (
    <section className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">{trainings.title}</h2>
        <Accordion items={trainings.items} />
      </Container>
    </section>
  );
};
