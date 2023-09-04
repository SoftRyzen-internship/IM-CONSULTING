import PropTypes from 'prop-types';

import { LinkNavBar } from '@/components/LinkNavBar';
import data from '@/data/data.json';

export const NavBar = ({ type }) => {
  const { navBar } = data;

  return (
    <nav>
      <ul className="flex flex-col">
        {navBar.map(({ label, link }) => (
          <LinkNavBar key={label} link={link} label={label} type={type} />
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  type: PropTypes.string.isRequired,
};
