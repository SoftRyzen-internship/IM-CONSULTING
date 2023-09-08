'use client';

import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { NavBar } from '@/layout/NavBar';
import { Socials } from '../Socials';
import { Container } from '../Container';

export const MobileMenu = ({ handleMenuToggle, isMenuOpen }) => {
  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    <div
      className={`${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
      } menu-gradient absolute justify-center xl:hidden top-0 left-0 right-0 w-full h-[100vh] z-30 transition duration-300`}
    >
      <Container className="flex">
        <div className="flex flex-shrink-0 items-center w-[68px] md:w-[88px] h-[100vh]">
          <Socials component="burgerMenu" />
        </div>
        <div className="flex items-center w-full pl-6 md:pl-[240px]">
          <NavBar handleMenuToggle={handleMenuToggle} menu={true} />
        </div>
      </Container>
    </div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
