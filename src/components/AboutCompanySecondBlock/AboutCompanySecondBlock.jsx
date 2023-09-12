import about from '@/data/home/about.json';

import { AboutCompanyHeading } from '../AboutCompanyHeading';
import { AboutCompanyParagraph } from '../AboutCompanyParagraph';
import { Title } from '../Title';

export const AboutCompanySecondBlock = () => {
  return (
    <div className="flex flex-col gap-[36px] md:gap-[48px] xl:w-[1012px]">
      <Title
        tag="p"
        className="self-center title-section-about xl:text-justify"
      >
        {about.secondBlock.title}
      </Title>
      <ul className="flex flex-col gap-[48px]">
        {about.secondBlock.content.map(block => (
          <li
            key={block.subtitle}
            className="flex flex-col gap-[12px] md:flex-row md:justify-between md:items-start"
          >
            <AboutCompanyHeading className="self-end md:self-start text-right md:text-left md:w-[298px] xl:w-[357px]">
              {block.subtitle}
            </AboutCompanyHeading>
            <ul className="flex flex-col gap-[8px] md:gap-[16px] xl:gap-[12px] md:w-[342px] xl:w-[500px]">
              {block.text.map(paragraph => (
                <li key={paragraph}>
                  <AboutCompanyParagraph
                    background="white"
                    block="second"
                    className="flex gap-[8px] xl:gap-[12px]"
                  >
                    <span>-</span>
                    <span>{paragraph}</span>
                  </AboutCompanyParagraph>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
