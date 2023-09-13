'use client';

import { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { usePathname } from 'next/navigation';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { ButtonMenuToggle } from '@/components/ButtonMenuToggle';
import { Socials } from '@/components/Socials';
import { MobileMenu } from '@/components/MobileMenu';
import { routes } from '../../../routes';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(null);
  const [showHeader, setShowHeader] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 1279 });
  const pathname = usePathname();
  const isHome = pathname === routes.HOME || pathname === '/';

  const handleMenuToggle = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const listenCallback = useCallback(() => {
    const scrollHeight = window?.scrollY || document.documentElement.scrollTop;
    const hero = document.querySelector('#hero');
    const heroBg = document.querySelector('#heroBg');
    const connectBtn = document.querySelector('.connectBtn');
    const navBar = document.querySelector('nav');

    if (scrollHeight > 350 && scrollHeight < lastScrollTop) {
      setShowHeader(true);
    } else if (scrollHeight > 1 && scrollHeight > lastScrollTop) {
      setShowHeader(false);
    }
    setLastScrollTop(scrollHeight === 0 ? 0 : scrollHeight);

    if (!isMobile && isHome) {
      if (
        scrollHeight < 350 ||
        (scrollHeight > 2300 && scrollHeight < 2950) ||
        scrollHeight > 7100
      ) {
        connectBtn.classList.add('xl:text-accent');
        connectBtn.classList.remove('xl:text-orange');
        navBar.setAttribute('dark', true);
      } else {
        connectBtn.classList.add('xl:text-orange');
        connectBtn.classList.remove('xl:text-accent');
        navBar.removeAttribute('dark');
      }
      if (scrollHeight > 750) {
        hero.classList.remove('xl:fixed');
        heroBg.classList.remove('xl:h-[707px]');
        setIsMenuOpen(false);
      } else {
        hero.classList.add('xl:fixed');
        heroBg.classList.add('xl:h-[707px]');
        setIsMenuOpen(true);
      }
    }
  }, [lastScrollTop, isMobile, isHome]);

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  useEffect(() => {
    document.addEventListener('scroll', listenCallback);

    return () => {
      document.removeEventListener('scroll', listenCallback);
    };
  }, [listenCallback]);

  return (
    <header
      className={`${
        isMobile && lastScrollTop > 350 ? 'header-gradient fixed' : 'absolute'
      } 
      ${isMobile && showHeader ? ' opacity-100 translate-y-0 ' : ''}
      ${
        !isMobile && lastScrollTop < 620 && isMenuOpen
          ? 'xl:fixed'
          : 'xl:absolute'
      }
      ${
        isMobile && lastScrollTop > 1 && !showHeader
          ? ' opacity-0 -translate-y-full '
          : ''
      } top-0 left-0 right-0 py-[14px] md:py-[36px] transition duration-300 z-10 `}
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
