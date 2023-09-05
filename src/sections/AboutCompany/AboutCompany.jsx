import { about } from '../../data/home';

import { AboutCompanyFirstBlock } from '@/components/AboutCompanyFirstBlock';
import { AboutCompanySecondBlock } from '@/components/AboutCompanySecondBlock';
import { Container } from '@/components/Container';

export const AboutCompany = () => {
  return (
    <section className="py-[60px] md:py-80[px] xl:py-[120px] bg-white">
      <Container>
        <h2 className="hidden">{about.title}</h2>
        <div className="flex flex-col gap-[48px] xl:gap-[120px]">
          <AboutCompanyFirstBlock />
          <AboutCompanySecondBlock />
        </div>
      </Container>
    </section>
  );
};
