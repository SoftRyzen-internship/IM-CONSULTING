import about from '@/data/home/about.json';

import { AboutCompanyFirstBlock } from '@/components/AboutCompanyFirstBlock';
import { AboutCompanySecondBlock } from '@/components/AboutCompanySecondBlock';
import { Container } from '@/components/Container';
import { labelToLink } from '@/utils/labelToLink';

export const AboutCompany = () => {
  const id = labelToLink('Про компанію');
  return (
    <section id={id} className="py-[60px] md:py-80[px] xl:py-[120px] bg-white">
      <Container>
        <h2 className="visually-hidden">{about.title}</h2>
        <div className="flex flex-col gap-[48px] xl:gap-[120px]">
          <AboutCompanyFirstBlock />
          <AboutCompanySecondBlock />
        </div>
      </Container>
    </section>
  );
};
