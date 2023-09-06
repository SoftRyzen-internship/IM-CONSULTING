import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Socials } from '@/components/Socials';

export const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <Socials component="header" />
      </Container>
    </header>
  );
};
