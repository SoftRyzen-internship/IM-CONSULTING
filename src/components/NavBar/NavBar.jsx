import PropTypes from 'prop-types';

import { LinkNavBar } from '@/components/LinkNavBar';
import data from '@/data/data.json';

export const NavBar = ({ type }) => {
  const { navBar } = data;
  const mobileStyles = 'flex flex-col w-[168px] gap-[50px] mx-auto xl:hidden';
  const desktopStyles =
    'hidden mx-auto xl:flex xl:flex-col xl:gap-8 xl:w-[117px] xl:absolute xl:top-1/2 xl:left-0 xl:transform xl:-translate-y-1/2';

  return (
    <div className={type === 'mobile' ? mobileStyles : desktopStyles}>
      <nav>
        <ul className="flex flex-col gap-6 xl:gap-2">
          {navBar.map(({ label, link }) => (
            <LinkNavBar key={label} link={link} label={label} type={type} />
          ))}
        </ul>
      </nav>
      <p>Звʼязатися</p>
    </div>
  );
};

NavBar.propTypes = {
  type: PropTypes.string,
};
