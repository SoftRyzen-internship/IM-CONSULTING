import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

export const LinkPage = ({ link, label, handleMenuToggle }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  const handleClick = e => {
    e.target.blur();
    handleMenuToggle && handleMenuToggle();
  };

  return (
    <li className="flex items-center cursor-pointer">
      <Link
        href={link}
        onClick={handleClick}
        className={`${
          isActive
            ? 'xl:text-accent font-bold xl:hover:text-bgColor xl:focus:text-bgColor pointer-events-none'
            : 'xl:text-darkGray'
        }  text-[24px] xl:text-[16px] xl:font-bold leading-4 hover:text-white focus:text-white transition duration-300`}
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
