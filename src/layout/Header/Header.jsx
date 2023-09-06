import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <Logo />
      </Container>
    </header>
  );
};
