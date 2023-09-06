import { ProcessCard } from '../ProcessCard';
import { Title } from '../Title';
import process from '@/data/home/process.json';

export const ProcessContent = () => {
  return (
    <div>
      <Title
        tag="p"
        className="process-title mx-auto mb-[48px] md:mb-[16px] xl:mb-[24px] max-w-[480px] md:w-[696px] md:max-w-[696px] xl:w-[1012px] xl:max-w-[1012px] text-font20 md:text-font24 xl:text-font36 font-light"
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
    </div>
  );
};
