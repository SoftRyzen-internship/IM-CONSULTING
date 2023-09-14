import Image from 'next/image';
import PropTypes from 'prop-types';

import { Title } from '../Title';
import { convertImage, toBase64 } from '@/utils/getBase64';
const BLUR_COLOR = '#b5903b';

export const ProcessCard = ({ number, subtitle, text, src }) => {
  return (
    <li className="flex flex-col md:flex-row-reverse md:even:flex-row gap-[16px] md:gap-[24px] xl:gap-[32px] text-right even:text-left">
      <Image
        src={src}
        alt={subtitle}
        width={500}
        height={376}
        quality={100}
        className="mx-auto w-full h-auto md:w-[342px] md:h-[256px] xl:w-[500px] xl:h-[376px] xl:max-w-[500px] opacity-85"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          convertImage(500, 376, BLUR_COLOR),
        )}`}
      />
      <div>
        <div
          className={`flex justify-between items-baseline mb-[12px] xl:mb-[16px] ${
            parseInt(number) % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <span className="w-[59px] md:w-[94px] xl:w-[108px] text-orange text-[48px] font-light tracking-[4.8px] opacity-10 md:text-[72px] md:tracking-[7.2px] xl:text-[82px] xl:tracking-[8.2px] leading-[1]">
            {number}
          </span>
          <Title tag="h3" className="process-title font-bold">
            {subtitle}
          </Title>
        </div>
        <p className="font-light md:text-font16 xl:text-font24">{text}</p>
      </div>
    </li>
  );
};

ProcessCard.propTypes = {
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
