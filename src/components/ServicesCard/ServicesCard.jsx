import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';

import DownArrow from 'public/icons/downArrow.svg';
const links = ['/trainings', '/consulting', '/coaching'];

export const ServicesCard = ({ title, image, text, btnText, index }) => {
  return (
    <li className="group relative w-full h-[529px] md:w-[224px] md:h-[482px] xl:w-[324px] xl:h-[435px] xl:overflow-hidden">
      <div className="transform translate-y-0 transition-transform duration-500 ease-in-out relative hidden xl:block xl:w-[324px] z-10 group-hover:translate-y-[-100%] group-focus-within:translate-y-[-100%]">
        <Image
          src={image}
          alt={title}
          width={324}
          height={435}
          placeholder="blur"
        />
        <p className="absolute bottom-[48px] left-[24px] tracking-[0.04em] text-[42px] leading-[51px]">
          {title}
        </p>
      </div>
      <div className="bg-white flex flex-col justify-between h-full w-full absolute top-0 left-0 xl:gap-[16px] xl:w-[324px]">
        <div className="flex flex-col gap-[24px] pt-[48px] px-[20px] md:pt-[40px] md:px-[24px] xl:gap-[16px]">
          <h3 className="text-[36px] leading-[44px] tracking-[0.04em] md:text-[28px] md:leading-[34px] xl:text-[44px] xl:leading-[54px]">
            {title}
          </h3>
          <div className="flex flex-col gap-[8px] xl:gap-[4px]">
            {text.map((line, index) => (
              <p
                className="text-[16px] leading-[20px] tracking-[0.04em] md:text-[14px] md:leading-[17px] xl:text-[16px] xl:leading-[20px]"
                key={index}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        <Link
          href={links[index]}
          className="w-full py-[16px] tracking-[0.1em] bg-accent hover:bg-darkOrange focus:bg-darkOrange transition duration-300 flex justify-center items-center gap-[16px]
        md:gap-[12px] font-medium text-[24px] leading-[29px] md:text-[20px] md:leading-[24px] md:py-[12px] xl:text-[24px] xl:leading-[29px] xl:py-[20px]"
        >
          {btnText}
          <DownArrow />
        </Link>
      </div>
    </li>
  );
};

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  btnText: PropTypes.string.isRequired,
};
