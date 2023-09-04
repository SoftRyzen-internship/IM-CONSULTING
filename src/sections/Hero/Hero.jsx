import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';

export const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <NavBar type="dark" />
        <p>It is hero section</p>
      </Container>
    </section>
  );
};
