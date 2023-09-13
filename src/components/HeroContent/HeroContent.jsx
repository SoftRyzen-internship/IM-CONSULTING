import Image from 'next/image';

import HeroImg from 'public/images/hero/hero-1250.png';
import hero from '@/data/home/hero.json';

const { name, surname, title, subtitle, mission, stat1, stat2 } = hero;
const { text: stat1Text, number: stat1Number } = stat1;
const { text: stat2Text, number: stat2Number } = stat2;

const encodedImage =
  'data:image/png;base64,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';

export const HeroContent = () => {
  return (
    <>
      <div className="flex justify-between mb-[26px] md:mb-[62px] xl:mb-[232px]">
        <p className="text-xs md:text-[28px] xl:text-[24px] text-accent max-w-[94px] md:max-w-[224px] xl:max-w-[270px] leading-[15px] md:leading-[28px] xl:leading-[24px]">
          {subtitle}
        </p>
        <div className="flex flex-col items-end">
          <h1 className="text-[8px] md:text-[28px] xl:text-[32px] leading-[8px] md:leading-[28px] xl:leading-[32px]">
            {name} <span className="font-bold">{surname}</span>
          </h1>
          <h2 className="text-font24 md:mr-1 md:text-[66px] xl:text-[97px] leading-6 md:leading-[66px] xl:leading-[97px] -tracking-[0.15em]">
            {title}
          </h2>
          <p className="text-[8px] md:text-[20px] xl:text-[24px] max-w-[121px] md:max-w-[303px] xl:max-w-[363px] text-right">
            {mission}
          </p>
        </div>
      </div>
      <div className="flex justify-between xl:justify-end items-end">
        <div className="xl:absolute xl:left-[32px] xl:bottom-[65px] flex flex-col text-bgColor text-[8px] md:text-base leading-[17px] md:leading-[40px] xl:leading-[24px]">
          <p>{stat1Text}</p>
          <span className="text-xs md:text-[28px] xl:text-[32px] md:leading-7 xl:leading-[32px] font-medium tracking-[0.1em]">
            {stat1Number}
          </span>
        </div>

        <div className="flex flex-col items-end text-[8px] md:text-base md:leading-[16px] xl:leading-[24px] -tracking-[0.01em] text-right ">
          <p className="max-w-[92px] md:max-w-[186px] xl:max-w-[260px] ">
            {stat2Text}
          </p>
          <span className="text-[12px] md:text-[28px] xl:text-[32px] font-medium leading-[13px] md:leading-[28px]  xl:leading-[32px] tracking-[0.1em]">
            {stat2Number}
          </span>
        </div>
      </div>
      <div className="h-auto md:h-[403px] xl:h-[659px] max-md:w-[62%] md:w-[381px] xl:w-[625px] absolute bottom-[-7px] md:bottom-[-12px] xl:bottom-[-17px] left-1/2 md:left-[43%] xl:left-[52%] transform translate-x-[-50%] z-10 object-cover ">
        <Image
          src={HeroImg}
          placeholder="blur"
          blurDataURL={encodedImage}
          alt={`${name} ${surname}`}
          priority
          width={625}
          height={659}
          quality={100}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </>
  );
};
