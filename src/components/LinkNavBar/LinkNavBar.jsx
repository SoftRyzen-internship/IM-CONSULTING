import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

export const LinkNavBar = ({ link, label, handleMenuToggle, isLight }) => {
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
          isLight
            ? 'xl:text-black'
            : 'xl:text-gray xl:opacity-25 xl:hover:text-bgColor xl:focus:text-bgColor xl:hover:opacity-100 xl:focus:opacity-100'
        } text-[24px] xl:text-[16px] xl:font-bold leading-4 hover:text-white focus:text-white transition duration-300`}
        activeClass={`${
          isLight ? 'xl:!text-orange' : 'xl:!text-accent'
        } activeLink font-bold !opacity-100 pointer-events-none`}
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
  isLight: PropTypes.bool.isRequired,
};
