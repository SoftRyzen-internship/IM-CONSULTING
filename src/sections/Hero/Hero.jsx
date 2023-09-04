import { Container } from '@/components/Container';
import { HeroContent } from '@/components/HeroContent';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="hero relative h-auto pt-[74px] md:pt-[120px] xl:pt-[168px] overflow-hidden"
    >
      <Container className="relative">
        <HeroContent />
      </Container>
    </section>
  );
};
