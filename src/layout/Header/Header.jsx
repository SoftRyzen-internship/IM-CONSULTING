import { Container } from '@/components/Container';
import { Socials } from '@/components/Socials';
import { Logo } from '@/components/Logo';

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
