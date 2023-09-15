'use client';

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const LinkNavBar = ({
  link,
  label,
  handleMenuToggle,
  isMobile = true,
}) => {
  const [isDark, setIsDark] = useState(true);

  const handleClick = e => {
    e.target.blur();
    handleMenuToggle && handleMenuToggle();
  };

  const listenCallback = useCallback(() => {
    if (isMobile) return;
    const navBar = document.querySelector('nav');
    if (navBar.getAttribute('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    document.addEventListener('scroll', listenCallback);
    return () => {
      document.removeEventListener('scroll', listenCallback);
    };
  }, [isMobile, listenCallback]);

  return (
    <li className="flex items-center cursor-pointer">
      <Link
        key={label}
        to={link}
        smooth="easeInOutQuart"
        spy={true}
        offset={0}
        href="/"
        onClick={handleClick}
        className={`${
          isDark
            ? 'xl:text-gray xl:hover:!text-bgColor xl:focus:!text-bgColor'
            : 'xl:text-black'
        } text-[24px] xl:text-[16px] xl:font-bold xl:opacity-25 leading-4 hover:text-white focus:text-white xl:hover:text-black xl:focus:text-black xl:hover:opacity-100 xl:focus:opacity-100 transition duration-300`}
        activeClass={`${
          isDark ? 'xl:!text-accent' : 'xl:!text-orange'
        } font-bold !opacity-100 pointer-events-none`}
      >
        {label}
      </Link>
    </li>
  );
};

LinkNavBar.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleMenuToggle: PropTypes.func,
  isMobile: PropTypes.bool.isRequired,
};
