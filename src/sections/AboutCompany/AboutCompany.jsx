import { AboutCompanyFirstBlock } from '@/components/AboutCompanyFirstBlock';
import { AboutCompanySecondBlock } from '@/components/AboutCompanySecondBlock';
import { Container } from '@/components/Container';

export const AboutCompany = () => {
  return (
    <section className="py-[60px] md:py-80[px] xl:py-[120px]">
      <Container>
        <div className="flex flex-col gap-[48px] xl:gap-[120px]">
          <AboutCompanyFirstBlock />
          <AboutCompanySecondBlock />
        </div>
      </Container>
    </section>
  );
};
