import Link from 'next/link';
import PropTypes from 'prop-types';

import Image from 'next/image';
import DownArrow from 'public/icons/downArrow.svg';

export const ServicesCard = ({ title, image, text, btnText }) => {
  return (
    <li
      className="services-card-container relative w-[280px] h-[529px] md:w-[224px] md:h-[482px] xl:w-[324px] xl:h-[435px] xl:overflow-hidden"
      tabIndex="0"
    >
      <div className="services-card relative bottom-[0] hidden xl:block relative z-[1]">
        <Image src={image} alt={title} width={324} height={435} />
        <div className="bg-accent absolute top-[0] w-[100%] h-[100%] opacity-[0.7]"></div>
        <p className="absolute bottom-[48px] left-[24px]">{title}</p>
      </div>
      <div className="bg-white flex flex-col justify-between font-normal text-14px leading-1.5 tracking-0.03em text-basic-color h-full w-full absolute top-0 left-0 bg-white">
        <div className="flex flex-col gap-[24px] pt-[48px] px-[20px] md:pt[40px] md:px-[24px]">
          <h4 className="text-[36px] leading-[44px] tracking-[0.04em] md:text-[28px] md:leading-[34px]">
            {title}
          </h4>
          <div className="flex flex-col gap-[8px]">
            {text.map((line, index) => (
              <p
                className="text-[16px] leading-[20px] tracking-[0.04em] md:text-[14px] md:leading-[17px] "
                key={index}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        <Link
          href="/"
          className="w-[100%] py-[16px] bg-accent flex justify-center items-center gap-[16px] md:gap-[12px] font-medium text-[24px] leading-[29px] md:text-[20px] md:leadinh-[24px]"
        >
          {btnText} <DownArrow />
        </Link>
      </div>
    </li>
  );
};

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};
