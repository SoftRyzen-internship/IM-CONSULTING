'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { MobileMenu } from '@/components/MobileMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ maxWidth: 1279 });

  const handleMenuToggle = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

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
    <header>
      <Container className="header">
        {isMobile && (
          <button
            type="button"
            className="relative border-2 border-red z-50 text-red"
            isMenuOpen={isMenuOpen}
            onClick={handleMenuToggle}
          >
            Close/open
          </button>
        )}

        {isMobile && isMenuOpen && (
          <MobileMenu handleMenuToggle={handleMenuToggle} />
        )}
      </Container>
    </header>
  );
};
