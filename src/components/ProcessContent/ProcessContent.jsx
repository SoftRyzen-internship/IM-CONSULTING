import { ProcessCard } from '../ProcessCard';
import { Title } from '../Title';
import process from '@/data/home/process.json';

export const ProcessContent = () => {
  return (
    <>
      <Title
        tag="p"
        className="process-title mb-[48px] md:mb-[16px] xl:mb-[24px] w-[280px] md:w-[696px] xl:w-[1012px] text-font20 md:text-font24 xl:text-font36 font-light"
      >
        {process.title}
      </Title>

      <ul className="flex flex-col gap-[36px] xl:gap-[124px] items-center">
        {process.cards.map(item => (
          <ProcessCard
            key={item.number}
            number={item.number}
            subtitle={item.subtitle}
            text={item.text}
            src={item.src}
          />
        ))}
      </ul>
    </>
  );
};
