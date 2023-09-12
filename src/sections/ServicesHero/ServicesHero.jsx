'use client';

import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { ServicesHeroContent } from '@/components/ServicesHeroContent/ServicesHeroContent';

export const ServicesHero = ({ data }) => {
  const { title } = data.hero;

  return (
    <section
      className={`${
        title === 'Тренінги'
          ? 'trainings-hero-bg'
          : title === 'Коучинг'
          ? 'couching-hero-bg'
          : title === 'Консалтинг'
          ? 'consulting-hero-bg'
          : 'trainings-hero-bg'
      } h-[344px] md:h-[570px] xl:h-[743px] w-[100%] max-w-[100%] pt-[104px] md:pt-[120px] xl:pt-[141px] pb-[56px] md:pb-[126px] xl:pb-[200px]`}
    >
      <Container className="flex flex-row justify-center gap-[12px] md:gap-[31px] md:justify-between relative overflow-hidden h-full">
        <ServicesHeroContent data={data.hero} />
      </Container>
    </section>
  );
};

ServicesHero.propTypes = {
  data: PropTypes.object.isRequired,
};
