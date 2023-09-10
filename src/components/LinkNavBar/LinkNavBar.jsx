'use client';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const LinkNavBar = ({ link, label, handleMenuToggle }) => {
  const type = 'dark';

  const handleClick = () => {
    handleMenuToggle && handleMenuToggle();
  };

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
          type === 'dark'
            ? 'xl:text-gray xl:opacity-25 xl:hover:text-bgColor xl:focus:text-bgColor xl:hover:opacity-100 xl:focus:opacity-100'
            : 'xl:text-black'
        } text-[24px] xl:text-[16px] xl:font-bold leading-4 hover:text-white focus:text-white transition duration-300`}
        activeClass={`${
          type === 'dark' ? 'xl:!text-accent' : 'xl:!text-orange'
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
};
