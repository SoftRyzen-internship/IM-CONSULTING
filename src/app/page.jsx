'use client';

import { useEffect, useRef, useState } from 'react';

import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const heroHeight = heroRef.current.clientHeight;

    const parallaxBlock = document.getElementById('parallaxBlock');
    parallaxBlock.style.top = `${heroHeight}px`;
  }, []);

  return (
    <>
      <Hero
        ref={heroRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 0,
        }}
      />
      <div
        id="parallaxBlock"
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          zIndex: 1,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <AboutCompany />
      </div>
    </>
  );
}
