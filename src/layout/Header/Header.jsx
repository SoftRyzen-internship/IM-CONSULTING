'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { ButtonMenuToggle } from '@/components/ButtonMenuToggle';
import { Socials } from '@/components/Socials';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 1279 });

  const handleMenuToggle = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', closeESC);

    return () => {
      document.removeEventListener('keydown', closeESC);
    };
  }, []);

  return (
    <header className="fixed xl:absolute top-0 left-0 right-0 py-[14px] md:py-[36px] z-50">
      <Container className="header flex justify-between items-center">
        <Logo />
        {!isMobile && <Socials component="header" />}

        {isMobile && (
          <ButtonMenuToggle
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
          />
        )}

        {isMobile && isMenuOpen && (
          <MobileMenu handleMenuToggle={handleMenuToggle} />
        )}
      </Container>
    </header>
  );
};
