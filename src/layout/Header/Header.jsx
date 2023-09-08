'use client';

import { useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { Socials } from '@/components/Socials';
import ButtonMenuToggle from 'public/icons/menu.svg';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(null);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const mobile = useMediaQuery({ maxWidth: 1279 });

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
    document.addEventListener('scroll', listenCallback);

    return () => {
      document.removeEventListener('scroll', listenCallback);
    };
  }, [listenCallback, scrollHeight, setScrollHeight]);

  useEffect(() => {
    if (scrollHeight > 350 && isScrollUp) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [scrollHeight, isScrollUp]);

  return (
    <header
      className={`${scrollHeight > 1 ? 'header-gradient' : ''} 
      ${showHeader ? 'opacity-100 translate-y-0' : ''}
      ${
        scrollHeight > 1 && !showHeader ? 'opacity-0 -translate-y-full' : ''
      } fixed xl:absolute top-0 left-0 right-0 py-[14px] md:py-[36px] transition duration-300 z-50`}
    >
      <Container className="header flex justify-between items-center">
        <Logo />
        {!isMobile && <Socials component="header" />}

        {isMobile && (
          <ButtonMenuToggle className="w-[18px] fill-black hover:fill-white focus:fill-white transition duration-300" />
        )}
      </Container>
    </header>
  );
};
