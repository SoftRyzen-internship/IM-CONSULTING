import { Container } from '@/components/Container';
import { ProcessCard } from '@/components/ProcessCard';
import data from '@/data/data.json';

export const Process = () => {
  return (
    <section className="py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="sr-only">Process Section</h2>
        <p className="mx-auto mb-[48px] md:mb-[16px] xl:mb-[24px] w-[280px] md:w-[696px] xl:w-[1012px] text-font20 md:text-font24 xl:text-font36 font-light">
          <span className="text-orange">[ </span>
          <span className="mx-[12px] ">{data.process.title}</span>
          <span className="text-orange"> ]</span>
        </p>
        <ul className="flex flex-col gap-[36px] xl:gap-[124px] items-center">
          {data.process.cards.map(item => (
            <ProcessCard
              key={item.number}
              number={item.number}
              subtitle={item.subtitle}
              text={item.text}
              src={item.src}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};
