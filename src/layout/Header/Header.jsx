import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Socials } from '@/components/Socials';

export const Header = () => {
  return (
    <header className="header xl:absolute xl:z-10 xl:w-full xl:justify-between">
      <Container className="xl:flex xl:justify-between xl:items-center">
        <Logo />
        <Socials component="header" />
      </Container>
    </header>
  );
};
