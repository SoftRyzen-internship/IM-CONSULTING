import PropTypes from 'prop-types';

export const Title = ({ tag = 'h3', className = '', children }) => {
  const Tag = tag;

  return <Tag className={className}>{children}</Tag>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
