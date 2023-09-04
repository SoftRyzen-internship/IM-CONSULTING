'use client';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const LinkNavBar = ({ link, label, handleMenuToggle, type }) => {
  const handleClick = () => {
    handleMenuToggle && handleMenuToggle();
  };

  return (
    <li className="flex items-center cursor-pointer duration-300">
      <Link
        key={label}
        to={link}
        smooth="easeInOutQuart"
        spy={true}
        href="/"
        onClick={handleClick}
        className=""
        activeClass={type ? '' : 'navBarLinkActive  '}
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
  type: PropTypes.string.isRequired,
};
