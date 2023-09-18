import PropTypes from 'prop-types';

import CloseMobile from 'public/icons/close.svg';
import MenuBtn from 'public/icons/menu.svg';

export const ButtonMenuToggle = ({ isMenuOpen, handleMenuToggle }) => {
  return (
    <button
      type="button"
      aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
      className="relative flex items-center justify-center z-40 w-[48px] h-[48px] cursor-pointer hover:fill-white focus-visible:fill-white transition duration-300"
      onClick={handleMenuToggle}
    >
      {isMenuOpen ? (
        <CloseMobile width={16} height={16} />
      ) : (
        <MenuBtn width={18} height={12} />
      )}
    </button>
  );
};

ButtonMenuToggle.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};
