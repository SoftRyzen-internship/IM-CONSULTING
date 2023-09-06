import about from '@/data/home/about.json';

import { AboutCompanyParagraph } from '../AboutCompanyParagraph';
import { Title } from '../Title';

export const AboutCompanyFirstBlock = () => {
  return (
    <div className="flex flex-col gap-[36px] ">
      <Title tag="p" className="self-center title-section-about">
        {about.firstBlock.title}
      </Title>
      <div className="flex flex-col gap-[16px] md:flex-row ">
        <AboutCompanyParagraph
          background="black"
          block="first"
          className="py-[12px] md:py-[60px] px-[24px] text-center
           bg-black md:w-[200px] md:h-[200px] xl:w-[241px] xl:h-[241px]"
        >
          {about.firstBlock.content.mainBlock}
        </AboutCompanyParagraph>
        <ul className="flex flex-col gap-[16px] md:grid md:grid-cols-3 ">
          {about.firstBlock.content.otherBlocks.map(paragraph => (
            <li key={paragraph} className="relative">
              <AboutCompanyParagraph
                background="yellow"
                block="first"
                className="flex items-center justify-center text-center
                py-[12px] px-[24px] md:py-[26px] md:px-[16px] xl:p-[25px]
                h-full w-full md:w-[152px] xl:w-[241px] bg-accent md:row-span-1
                md:before:content-[''] md:before:absolute md:before:top-[12px] xl:before:top-[24px]
                 md:before:bg-black  md:before:opacity-10  md:before:w-full md:before:h-[1px]
                md:after:content-[''] md:after:absolute md:after:bottom-[12px] xl:after:bottom-[24px]
                 md:after:bg-black  md:after:opacity-10 md:after:w-full md:after:h-[1px]
                "
              >
                <span
                  className="md:before:absolute md:before:left-[12px] xl:before:left-[24px] md:before:top-0
                  md:before:bg-black  md:before:opacity-10 md:before:w-[1px] md:before:h-full
                  md:after:absolute md:after:right-[12px] xl:after:right-[24px] md:after:top-0
                 md:after:bg-black  md:after:opacity-10 md:after:w-[1px] md:after:h-full"
                >
                  {paragraph}
                </span>
              </AboutCompanyParagraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
