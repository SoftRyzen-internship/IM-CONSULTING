import PropTypes from 'prop-types';

import { NavBar } from '@/layout/NavBar';

export const MobileMenu = ({ handleMenuToggle }) => {
  return (
    <div className="absolute flex xl:hidden top-0 left-0 right-0 w-full h-[100vh] bg-black z-30">
      <div className="flex items-center w-[28%] md:w-[19%]"></div>
      <div className="flex items-center w-[72%] bg-accent pl-6">
        <NavBar handleMenuToggle={handleMenuToggle} menu={true} />
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};
