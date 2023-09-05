import PropTypes from 'prop-types';

import { NavBar } from '@/layout/NavBar';

export const MobileMenu = ({ handleMenuToggle }) => {
  return (
    <div className="absolute flex xl:hidden top-0 left-0 w-full h-[100vh] bg-black z-30">
      <div className="w-[27%] md:w-[19%]"></div>
      <div className="w-full bg-accent pt-[30px] pl-6">
        <NavBar handleMenuToggle={handleMenuToggle} menu={true} />
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};
