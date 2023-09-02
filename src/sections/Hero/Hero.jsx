import { Container } from '@/components/Container';
import { ConnectButton } from '@/components/ConnectButton';

export const Hero = () => {
  return (
    <section>
      <Container>
        <p>It is hero section</p>
        <ConnectButton color="accent" />
      </Container>
    </section>
  );
};
