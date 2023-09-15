import { Container } from '@/components/Container';

import footer from '@/data/footer.json';
const { title, reserved, made, softRyzen, subtitle } = footer;

export const Footer = () => {
  return (
    <footer className="h-[241px] md:h-[326px] xl:h-[433px] bg-accent relative z-20 ">
      <Container className="relative overflow-hidden h-full text-[12px] md:text-[16px] flex flex-col items-center md:items-end justify-center">
        <p className=" mb-[8px] md:mb-[24px] font-medium">
          <span className="opacity-75">
            {reserved} {subtitle}
          </span>
          {title}
        </p>
        <h2 className="text-[55px] md:text-[66px] xl:text-[97px] leading-[67px] xl:leading-[97px] tracking-[-0.15em] mb-[16px] md:mb-[36px] xl:mb-[32px] mr-[8px] xl:mr-[13px] uppercase ">
          {title}
        </h2>
        <p className="font-medium">
          <span className="opacity-75">{made} </span>
          <a
            href="https://softryzen.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="hover:text-white focus:text-white transition duration-300"
          >
            {softRyzen}
          </a>
        </p>
        <p className="absolute pointer-events-none text-[337px] md:text-[457px] xl:text-[635px] leading-[337px] md:leading-[457px] xl:leading-[776px] tracking-[-0.12em] xl:tracking-[0.04em] font-black  top-[-52px] md:top-[-72px] xl:top-[-171px] left-[-28px] md:left-0 xl:left-[-22px] opacity-5 ">
          {subtitle}
        </p>
      </Container>
    </footer>
  );
};
