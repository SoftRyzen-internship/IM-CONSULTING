import PropTypes from 'prop-types';

export const Title = ({
  tag = 'h3',
  section = 'about',
  className = '',
  children,
}) => {
  const Tag = tag;

  const titleStyles = {
    about:
      "text-font20 md:text-font24 xl:text-font36 font-light before:content-['['] before:mr-[14px] md:before:mr-[20px] xl:before:mr-[30px] before:text-accent after:content-[']'] after:ml-[14px] md:after:mr-[20px] xl:after:mr-[30px] after:text-accent",
  };

  return (
    <Tag className={`${titleStyles[section]} ${className}`}>{children}</Tag>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};
