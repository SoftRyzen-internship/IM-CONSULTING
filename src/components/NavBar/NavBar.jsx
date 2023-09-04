import PropTypes from 'prop-types';

import { LinkNavBar } from '@/components/LinkNavBar';
import data from '@/data/data.json';

export const NavBar = ({ type }) => {
  const { navBar } = data;

  return (
    <div className="flex flex-col gap-[50px] xl:gap-8 mx-auto w-[168px] xl:w-[117px] xl:absolute xl:top-1/2 xl:left-0 xl:transform xl:-translate-y-1/2">
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
