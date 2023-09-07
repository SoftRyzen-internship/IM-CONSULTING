'use client';

import { useEffect, useState, useLayoutEffect, useCallback } from 'react';
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
    setScrollHeight(window?.scrollY || document.documentElement.scrollTop);

    if (scrollHeight > lastScrollTop) {
      setIsScrollUp(false);
    } else if (scrollHeight < lastScrollTop) {
      setIsScrollUp(true);
    }
    setLastScrollTop(scrollHeight <= 0 ? 0 : scrollHeight);
  }, [lastScrollTop, scrollHeight]);

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

  useEffect(() => {
    document.addEventListener('scroll', listenCallback);

    return () => {
      document.removeEventListener('scroll', listenCallback);
    };
  }, [listenCallback, scrollHeight, setScrollHeight]);

  useLayoutEffect(() => {
    if (scrollHeight > 1 && isScrollUp) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scrollHeight, isScrollUp]);

  return (
    <header
      className={`${
        showHeader ? 'header-gradient fixed' : 'absolute'
      } xl:absolute top-0 left-0 right-0 py-[14px] md:py-[36px] z-50`}
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

        {isMobile && isMenuOpen && (
          <MobileMenu handleMenuToggle={handleMenuToggle} />
        )}
      </Container>
    </header>
  );
};
