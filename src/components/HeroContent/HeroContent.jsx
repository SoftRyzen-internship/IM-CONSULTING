import Image from 'next/image';

import HeroImg from 'public/images/hero/hero-face.png';
import hero from '@/data/home/hero.json';

const { name, surname, title, subtitle, mission, stat1, stat2 } = hero;
const { text: stat1Text, number: stat1Number } = stat1;
const { text: stat2Text, number: stat2Number } = stat2;

export const HeroContent = () => {
  return (
    <>
      <div className=" flex justify-between mb-[26px] md:mb-[62px] xl:mb-[232px]">
        <p className=" text-xs md:text-[28px] xl:text-[24px] text-accent max-w-[94px] md:max-w-[224px] xl:max-w-[270px] leading-[15px] md:leading-[28px] xl:leading-[24px]">
          {subtitle}
        </p>
        <div className=" flex flex-col items-end">
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
          alt={`${name} ${surname}`}
          priority
          quality={85}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </>
  );
};
