import Link from 'next/link';
import PropTypes from 'prop-types';

export const LinkPage = ({ link, label, handleMenuToggle }) => {
  const handleClick = () => {
    handleMenuToggle && handleMenuToggle();
  };

  return (
    <li className="flex items-center cursor-pointer">
      <Link
        href={link}
        onClick={handleClick}
        className="xl:text-gray xl:hover:text-white xl:focus:text-white text-[24px] xl:text-[16px] xl:font-bold leading-4 hover:text-white focus:text-white transition duration-300"
        activeClass="xl:text-accent font-bold pointer-events-none"
      >
        {label}
      </Link>
    </li>
  );
};

LinkPage.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleMenuToggle: PropTypes.func,
};
