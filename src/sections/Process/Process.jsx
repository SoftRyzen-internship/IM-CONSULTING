import { Container } from '@/components/Container';
import { ProcessCard } from '@/components/ProcessCard';
import data from '@/data/data.json';

export const Process = () => {
  return (
    <section>
      <Container>
        <h2 className="sr-only">Process Section</h2>
        <p className='mb-[48px] md:mb-[16px] xl:mb-[24px]'>{data.process.title}</p>
        <ul className='flex flex-col gap-[36px] xl:gap-[124px]'>
          {data.process.cards.map(item => (
            <ProcessCard
              key={item.number}
              number={item.number}
              subtitle={item.subtitle}
              text={item.text}
              image
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};
