import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Socials } from '@/components/Socials';

export const Header = () => {
  return (
    <header className="header absolute z-10 w-full justify-between">
      <Container className="xl:flex justify-between items-center">
        <Logo />
        <Socials component="header" />
      </Container>
    </header>
  );
};
