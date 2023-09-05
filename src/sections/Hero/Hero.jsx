import { Container } from '@/components/Container';
import { HeroContent } from '@/components/HeroContent';
import { labelToLink } from '@/helpers';

export const Hero = () => {
  const id = labelToLink('Головна');
  return (
    <section id={id} className="hero-bgcolor relative h-auto ">
      <Container className="relative hero-bg pt-[74px] md:pt-[120px] xl:pt-[168px] pb-[156px] md:pb-[184px] xl:pb-[64px] overflow-hidden">
        <HeroContent />
      </Container>
    </section>
  );
};
