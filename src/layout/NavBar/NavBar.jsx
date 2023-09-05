import PropTypes from 'prop-types';

import { LinkNavBar } from '@/components/LinkNavBar';
import { ConnectButton } from '@/components/ConnectButton';
import data from '@/data/data.json';

export const NavBar = ({ menu = false }) => {
  const { navBar } = data;

  return (
    <div
      className={`${
        menu ? 'flex xl:hidden' : 'hidden xl:flex'
      } flex-col w-[168px] xl:w-[117px] gap-[50px] xl:gap-8 mx-auto relative xl:fixed xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-[608px] xl:-translate-y-1/2 z-20`}
    >
      <nav>
        <ul className="flex flex-col gap-6 xl:gap-2">
          {navBar.map(({ label, link }) => (
            <LinkNavBar key={label} link={link} label={label} />
          ))}
        </ul>
      </nav>
      <ConnectButton color={menu ? 'black' : 'accent'} />
    </div>
  );
};

NavBar.propTypes = {
  menu: PropTypes.bool,
};
