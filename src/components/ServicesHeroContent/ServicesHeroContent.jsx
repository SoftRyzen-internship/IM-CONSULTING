import PropTypes from 'prop-types';

export const ServicesHeroContent = ({ heroContent }) => {
  const { title, subtitle, description, text } = heroContent;

  return (
    <>
      <div className="flex flex-row justify-evenly md:justify-between">
        <div className="flex flex-col gap-[129px] md:gap-[217px]">
          <h1 className="text-[20px] md:w-[322px] xl:w-[auto] xl:absolute xl:left-[30px] md:text-[48px] xl:text-[72px] text-accent leading-[24px] md:leading-[59px] xl:leading-[88px] tracking-[0.1em]">
            {title}
          </h1>
          <p className="hero-description w-[134px] md:w-[100%] xl:min-w-[476px] xl:absolute xl:right-[552px] font-light text-white text-[12px] md:text-[20px] xl:text-[24px] leading-[15px] md:leading-[24px] xl:leading-[29px] tracking-[-0.04em] xl:absolute xl:bottom-[203px] xl:text-end xl:pr-[35px]">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-[48px] md:gap-[180px] xl:gap-[211px] pt-[6px] md:pt-[19px] xl:pt-[30px]">
          <p className="hero-subtitle font-light w-[134px] md:w-auto xl:w-[500px] text-[12px] md:text-[20px] xl:text-[24px] xl:text-left leading-[15px] md:leading-[24px] xl:leading-[29px] tracking-[-0.04em]">
            {subtitle}
          </p>
          <p className="max-w-[134px] md:max-w-[342px] xl:max-w-[500px] text-[16px] leading-[20px] md:text-[28px] md:leading-[34px] xl:text-[36px] xl:leading-[44px] tracking-[-0.04em] text-left">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

ServicesHeroContent.propTypes = {
  heroContent: PropTypes.object.isRequired,
};
