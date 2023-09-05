import { Container } from '@/components/Container';
import { MobileMenu } from '@/components/MobileMenu';

export const Header = () => {
  return (
    <header>
      <Container className="header">
        <p>It is header</p>
        <MobileMenu handleMenuToggle={() => {}} />
      </Container>
    </header>
  );
};
