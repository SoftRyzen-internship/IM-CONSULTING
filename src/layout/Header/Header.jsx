'use client';

import { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { ButtonMenuToggle } from '@/components/ButtonMenuToggle';
import { Socials } from '@/components/Socials';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(null);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 1279 });

  const handleMenuToggle = () => setIsMenuOpen(prev => !prev);

  const listenCallback = useCallback(() => {
    if (!isMobile) return;
    setScrollHeight(window?.scrollY || document.documentElement.scrollTop);

    if (scrollHeight > lastScrollTop) {
      setIsScrollUp(false);
    } else if (scrollHeight < lastScrollTop) {
      setIsScrollUp(true);
    }
    setLastScrollTop(scrollHeight <= 0 ? 0 : scrollHeight);
  }, [lastScrollTop, scrollHeight, isMobile]);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    isMobile && document.addEventListener('scroll', listenCallback);

    return () => {
      isMobile && document.removeEventListener('scroll', listenCallback);
    };
  }, [listenCallback, isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    if (scrollHeight > 350 && isScrollUp) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scrollHeight, isScrollUp, isMobile]);

  return (
    <header
      className={`${scrollHeight > 350 ? 'header-gradient' : ''} 
      ${showHeader ? 'opacity-100 translate-y-0' : ''}
      ${
        scrollHeight > 1 && !showHeader ? 'opacity-0 -translate-y-full' : ''
      } fixed xl:absolute top-0 left-0 right-0 py-[14px] md:py-[36px] transition duration-300 z-50`}
    >
      <Container className="header flex justify-between items-center">
        <Logo />
        {!isMobile && <Socials component="header" />}

        {isMobile && (
          <ButtonMenuToggle
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
          />
        )}

        {isMobile && (
          <MobileMenu
            handleMenuToggle={handleMenuToggle}
            isMenuOpen={isMenuOpen}
          />
        )}
      </Container>
    </header>
  );
};
