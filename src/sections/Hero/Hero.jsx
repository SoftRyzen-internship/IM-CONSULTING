import { Container } from '@/components/Container';
import { NavBar } from '@/components/NavBar';

export const Hero = () => {
  return (
    <section>
      <Container>
        <NavBar type="light" />
        <p>It is hero section</p>
      </Container>
    </section>
  );
};
