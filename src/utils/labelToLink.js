import PropTypes from 'prop-types';
import data from '@/data/home/navigation.json';

export const labelToLink = label => {
  const { navBar } = data;
  const item = navBar.find(navBarItem => navBarItem.label === label);
  return item ? item.link : '';
};

labelToLink.propTypes = {
  label: PropTypes.string.isRequired,
};
