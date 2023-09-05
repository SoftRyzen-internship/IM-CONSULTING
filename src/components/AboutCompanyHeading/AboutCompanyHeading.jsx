import PropTypes from 'prop-types';

export const AboutCompanyHeading = ({ children, className = '' }) => {
  return (
    <h3 className={`text-font20 xl:text-font24 font-bold ${className}`}>
      {children}
    </h3>
  );
};

AboutCompanyHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
