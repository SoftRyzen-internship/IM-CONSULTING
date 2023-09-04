import { Container } from '@/components/Container';
import { ProcessCard } from '@/components/ProcessCard';
import data from 'data/data.json';

export const Process = () => {
  return (
    <section>
      <Container>
        <ul>
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
