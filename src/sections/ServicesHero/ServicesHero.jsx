'use client';

import PropTypes from 'prop-types';

import { Container } from '@/components/Container';
import { ServicesHeroContent } from '@/components/ServicesHeroContent/ServicesHeroContent';

export const ServicesHero = ({ currentPage }) => {
  return (
    <section
      className={`${
        currentPage === '/trainings'
          ? 'trainings-hero-bg'
          : currentPage === '/couching'
          ? 'couching-hero-bg'
          : currentPage === '/consulting'
          ? 'consulting-hero-bg'
          : 'trainings-hero-bg'
      } relative h-auto w-[100%] max-w-[100%]`}
    >
      <Container className="relative pt-[110px] md:pt-[120px] xl:pt-[141px] pb-[56px] md:pb-[126px] xl:pb-[200px] overflow-hidden">
        <ServicesHeroContent currentPage={currentPage} />
      </Container>
    </section>
  );
};

ServicesHero.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
