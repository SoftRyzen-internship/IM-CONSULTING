import PropTypes from 'prop-types';

export const Title = ({ children, className }) => {
  return (
    <h2
      className={`text-font20 md:text-font24 xl:text-font36 font-light
  before:content-['['] before:mr-[14px] md:before:mr-[17px] xl:before:mr-[26px] before:text-accent
  after:content-[']'] after:ml-[14px] md:after:mr-[17px] xl:after:mr-[26px] after:text-accent
  ${className}`}
    >
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
