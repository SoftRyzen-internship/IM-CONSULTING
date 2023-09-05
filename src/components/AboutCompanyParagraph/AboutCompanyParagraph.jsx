import PropTypes from 'prop-types';

export const AboutCompanyParagraph = ({
  children,
  background,
  block,
  className = '',
}) => {
  const textColor = {
    black: 'text-white',
    white: 'text-black',
    yellow: 'text-black',
  };

  const textProperties = {
    first: 'text-font16 xl:text-font24 font-normal',
    second: 'text-font16 md:text-font20 xl:text-font24 font-normal',
  };

  return (
    <p
      className={`${textProperties[block]} ${textColor[background]} ${className}`}
    >
      {children}
    </p>
  );
};

AboutCompanyParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  block: PropTypes.string.isRequired,
  className: PropTypes.string,
};
