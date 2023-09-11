'use client';

import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { ServicesHeroContent } from '@/components/ServicesHeroContent/ServicesHeroContent';

export const ServicesHero = ({ heroContent }) => {
  const page = Object.keys(heroContent);

  return (
    <section
      className={`${
        page[0] === 'trainingsHero'
          ? 'trainings-hero-bg'
          : page[0] === 'coachingHero'
          ? 'couching-hero-bg'
          : page[0] === 'consultingHero'
          ? 'consulting-hero-bg'
          : 'trainings-hero-bg'
      } h-[344px] md:h-[570px] xl:h-[743px] w-[100%] max-w-[100%] pt-[104px] md:pt-[120px] xl:pt-[141px] pb-[56px] md:pb-[126px] xl:pb-[200px]`}
    >
      <Container className="relative overflow-hidden">
        <ServicesHeroContent heroContent={heroContent['hero']} />
      </Container>
    </section>
  );
};

ServicesHero.propTypes = {
  heroContent: PropTypes.object.isRequired,
};
