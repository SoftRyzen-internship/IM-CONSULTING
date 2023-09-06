import PropTypes from 'prop-types';

import CloseMobile from 'public/icons/close.svg';
import MenuBtn from 'public/icons/menu.svg';

export const ButtonMenuToggle = ({ isMenuOpen, handleMenuToggle }) => {
  return (
    <button
      type="button"
      aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
      className="block relative z-40 cursor-pointer duration-300"
      onClick={handleMenuToggle}
    >
      {isMenuOpen ? (
        <CloseMobile width={16} height={16} />
      ) : (
        <MenuBtn width={16} height={16} />
      )}
    </button>
  );
};

ButtonMenuToggle.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
};
