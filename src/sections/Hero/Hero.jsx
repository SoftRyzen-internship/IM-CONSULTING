import { Container } from '@/components/Container';
import { HeroContent } from '@/components/HeroContent';

export const Hero = () => {
  return (
    <section id="hero" className="hero-bgcolor relative h-auto overflow-hidden">
      <Container className="relative hero-bg pt-[74px] md:pt-[120px] xl:pt-[168px] ">
        <HeroContent />
      </Container>
    </section>
  );
};
