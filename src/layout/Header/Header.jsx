'use client';

import { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { ButtonMenuToggle } from '@/components/ButtonMenuToggle';
import { Socials } from '@/components/Socials';
import { MobileMenu } from '@/components/MobileMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(null);
  const [showHeader, setShowHeader] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 1279 });

  const handleMenuToggle = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const listenCallback = useCallback(() => {
    if (!isMobile) return;
    const scrollHeight = window?.scrollY || document.documentElement.scrollTop;
    if (scrollHeight > 350 && scrollHeight < lastScrollTop) {
      setShowHeader(true);
    } else if (scrollHeight > 1 && scrollHeight > lastScrollTop) {
      setShowHeader(false);
    }
    setLastScrollTop(scrollHeight === 0 ? 0 : scrollHeight);
  }, [lastScrollTop, isMobile]);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    isMobile && document.addEventListener('scroll', listenCallback);

    return () => {
      isMobile && document.removeEventListener('scroll', listenCallback);
    };
  }, [listenCallback, isMobile]);

  return (
    <header
      className={`${lastScrollTop > 350 ? 'header-gradient fixed' : 'absolute'} 
      ${showHeader ? ' opacity-100 translate-y-0 ' : ''}
      ${
        lastScrollTop > 1 && !showHeader ? ' opacity-0 -translate-y-full ' : ''
      } xl:absolute top-0 left-0 right-0 py-[14px] md:py-[36px] transition duration-300 z-50 `}
    >
      <Container className="header flex justify-between items-center">
        <Logo onClick={closeMenu} />
        {!isMobile && <Socials component="header" />}

        {isMobile && (
          <ButtonMenuToggle
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
          />
        )}

        {isMobile && (
          <MobileMenu handleMenuToggle={closeMenu} isMenuOpen={isMenuOpen} />
        )}
      </Container>
    </header>
  );
};
