import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
