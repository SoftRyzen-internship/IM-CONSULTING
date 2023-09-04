import Image from 'next/image';
import PropTypes from 'prop-types';

export const ProcessCard = ({ number, subtitle, text, image }) => {
  return (
    <div className="">
      <div>
        <Image src={image} alt={subtitle} />
      </div>
      <div>
        <div>
          <p>{number}</p>
          <p>{subtitle}</p>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

ProcessCard.propTypes = {
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
