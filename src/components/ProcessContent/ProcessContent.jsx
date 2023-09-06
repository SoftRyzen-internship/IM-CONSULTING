import { ProcessCard } from '@/components/ProcessCard';
import process from '@/data/home/process.json';

export const ProcessContent = () => {
  return (
    <>
      <p className="mx-auto mb-[48px] md:mb-[16px] xl:mb-[24px] w-[280px] md:w-[696px] xl:w-[1012px] text-font20 md:text-font24 xl:text-font36 font-light">
        <span className="text-orange">[</span>
        <span className="mx-[12px] md:mx-[15px] xl:mx-[18px]">
          {process.title}
        </span>
        <span className="text-orange">]</span>
      </p>

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
