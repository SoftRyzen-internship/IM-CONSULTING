import Image from 'next/image';
import PropTypes from 'prop-types';

export const ProcessCard = ({ number, subtitle, text, image }) => {
  return (
    <div className="w-[280px] md:w-[696px] xl:w-[1012px] md:flex text-right even:text-left md:even:flex-row-reverse">
      <div>
        <Image src={image} alt={subtitle} />
      </div>
      <div>
        <div className="flex justify-between items-baseline">
          <p className="text-orange text-[48px] font-light opacity-10">
            {number}
          </p>
          <h3>
            <span className="text-orange">[ </span>
            <span className="mx-[12px] font-bold">{subtitle}</span>
            <span className="text-orange"> ]</span>
          </h3>
        </div>
        <p className="font-light">{text}</p>
      </div>
    </div>
  );
};

ProcessCard.propTypes = {
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
