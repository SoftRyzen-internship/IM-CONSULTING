import Image from 'next/image';
import PropTypes from 'prop-types';

export const ProcessCard = ({ number, subtitle, text, src }) => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:even:flex-row gap-[16px] md:gap-[24px] xl:gap-[32px] w-[280px] md:w-[696px] xl:w-[1012px] text-right even:text-left">
      <div className="w-[280px] h-[200px] md:w-[342px] md:h-[256px] xl:w-[500px] xl:h-[376px] md:mt-[20px] opacity-85">
        <Image
          src={src}
          alt={subtitle}
          width={500}
          height={376}
          quality={100}
          className="w-[280px] h-[200px] md:w-[342px] md:h-[256px] xl:w-[500px] xl:h-[376px]"
        />
      </div>
      <div className="w-[280px] md:w-[330px] xl:w-[480px]">
        <div
          className={`flex justify-between items-baseline ${
            parseInt(number) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <span className="w-[59px] h-[59px] md:w-[94px] md:h-[88px] xl:w-[108px] xl:h-[100px] text-orange text-[48px] font-light tracking-[4.8px] opacity-10 md:text-[72px] md:tracking-[7.2px] xl:text-[82px] xl:tracking-[8.2px]">
            {number}
          </span>
          <h3>
            <span className="text-orange">[</span>
            <span className="mx-[12px] md:mx-[15px] xl:mx-[18px] font-bold">
              {subtitle}
            </span>
            <span className="text-orange">]</span>
          </h3>
        </div>
        <p className="font-light md:text-font16 xl:text-font24">{text}</p>
      </div>
    </div>
  );
};

ProcessCard.propTypes = {
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
