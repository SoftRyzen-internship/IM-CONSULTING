import { Container } from '@/components/Container';
import { HeroBackground } from '@/components/HeroBackground';
import { HeroContent } from '@/components/HeroContent';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-auto pt-[74px] md:pt-[120px] xl:pt-[168px] overflow-hidden"
    >
      <Container>
        <HeroContent />
      </Container>
      <HeroBackground />
    </section>
  );
};
