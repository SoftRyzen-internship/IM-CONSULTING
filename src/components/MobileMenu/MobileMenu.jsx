import PropTypes from 'prop-types';

import { NavBar } from '@/layout/NavBar';
import { Socials } from '../Socials';
import { Container } from '../Container';

export const MobileMenu = ({ handleMenuToggle, isMenuOpen }) => {
  return isMenuOpen ? (
    <div className="menu-gradient absolute justify-center xl:hidden top-0 left-0 right-0 w-full h-[100vh] z-30 ">
      <Container className="flex">
        <div className="flex items-center w-[34%]  md:w-[148px] h-[100vh]">
          <Socials component="burgerMenu" />
        </div>
        <div className="flex items-center md:justify-center w-full md:w-[620px] pl-6">
          <NavBar handleMenuToggle={handleMenuToggle} menu={true} />
        </div>
      </Container>
    </div>
  ) : null;
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};
