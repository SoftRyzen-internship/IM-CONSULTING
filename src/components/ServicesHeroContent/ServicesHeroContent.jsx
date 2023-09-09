import PropTypes from 'prop-types';

export const ServicesHeroContent = ({ heroContent }) => {
  const { title, subtitle, description, text } = heroContent;

  return (
    <>
      <div className="flex justify-between md:justify-normal xl:justify-end md:items-center md:gap-[5%] xl:gap-[0] mb-[48px] md:mb-[164px] xl:mb-[182px] xl:h-[88px]">
        <h1 className="text-[20px] md:w-[322px] xl:w-[auto] xl:absolute xl:left-0 md:text-[48px] xl:text-[72px] text-accent leading-[24px] md:leading-[59px] xl:leading-[88px] tracking-[0.1em]">
          {title}
        </h1>
        <div className="flex flex-col items-end w-[134px] md:w-auto xl:w-[500px]">
          <p className="font-light hero-subtitle text-[12px] md:text-[20px] xl:w-[100%] xl:text-[24px] xl:text-left leading-[15px] md:leading-[24px] xl:leading-[29px] tracking-[-0.04em]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex justify-between md:justify-between xl:justify-end xl:gap-[36px] items-end">
        <div className="flex flex-col w-[134px] md:w-[40%] xl:min-w-[476px] xl:absolute xl:right-[552px]">
          <p className="font-light hero-description text-white text-[12px] md:text-[20px] xl:text-[24px] leading-[15px] md:leading-[24px] xl:leading-[29px] tracking-[-0.04em]">
            {description}
          </p>
        </div>

        <div className="flex flex-col items-end max-w-[134px] md:max-w-[342px] xl:max-w-[500px]">
          <p className="text-[16px] leading-[20px] md:text-[28px] md:leading-[34px] xl:text-[36px] xl:leading-[44px] tracking-[-0.04em] text-left">
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
