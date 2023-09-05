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
        href="/"
        onClick={handleClick}
        className={`${
          type === 'dark'
            ? 'xl:text-gray xl:hover:text-white xl:focus:text-white '
            : 'xl:text-black xl:opacity-25 xl:hover:opacity-100 xl:focus:opacity-100 '
        } text-[24px] xl:text-[16px] xl:font-bold leading-4 hover:text-white focus:text-white transition duration-300`}
        activeClass={`${
          type === 'dark' ? 'xl:!text-accent' : 'xl:!text-orange'
        } font-bold pointer-events-none`}
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
