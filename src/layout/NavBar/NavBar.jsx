import PropTypes from 'prop-types';

import { LinkNavBar } from '@/components/LinkNavBar';
import data from '@/data/data.json';

export const NavBar = ({ isDesktop }) => {
  const { navBar } = data;

  return (
    <div
      className={`${
        isDesktop ? 'hidden xl:flex' : 'flex xl:hidden'
      } flex-col w-[168px] xl:w-[117px] gap-[50px] xl:gap-8 mx-auto relative xl:fixed xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-[608px] xl:-translate-y-1/2 z-20`}
    >
      <nav>
        <ul className="flex flex-col gap-6 xl:gap-2">
          {navBar.map(({ label, link }) => (
            <LinkNavBar key={label} link={link} label={label} />
          ))}
        </ul>
      </nav>
      <p className="text-red">Звʼязатися</p>
    </div>
  );
};

NavBar.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};
