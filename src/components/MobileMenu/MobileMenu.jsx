import PropTypes from 'prop-types';

import { NavBar } from '@/layout/NavBar';
import { Container } from '@/components/Container';

export const MobileMenu = ({ handleMenuToggle }) => {
  return (
    <div className="absolute block xl:hidden top-0 left-0 w-full bg-black pt-[76px] h-[100vh]">
      <Container className="py-6 flex flex-col justify-start h-full overflow-y-auto">
        <NavBar
          className="flex flex-col"
          handleMenuToggle={handleMenuToggle}
          menu={true}
        />
      </Container>
    </div>
  );
};

MobileMenu.propTypes = {
  handleMenuToggle: PropTypes.func.isRequired,
};
