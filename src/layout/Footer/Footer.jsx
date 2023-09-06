import { Container } from '@/components/Container';

export const Footer = () => {
  return (
    <footer className="h-[241px] bg-accent ">
      <Container className="relative overflow-hidden h-full text-[12px] flex flex-col items-center justify-center">
        <p className=" mb-[8px] font-medium">
          <span className="opacity-75">All rights reserved 2023 © IM</span>
          Consulting
        </p>
        <h2 className="text-[55px] leading-[67px] tracking-[-0.15em] mb-[16px]">
          CONSULTING
        </h2>
        <p>
          <span className="opacity-75">Made by </span>
          <a href="https://softryzen.com/" target="_blank">
            SoftRyzen
          </a>
        </p>
        <p className="absolute pointer-events-none text-[337px] leading-[337px]  tracking-[-0.12em] font-black  top-[-52px] left-[-28px] opacity-20 w-full text-center">
          IM
        </p>
      </Container>
    </footer>
  );
};
