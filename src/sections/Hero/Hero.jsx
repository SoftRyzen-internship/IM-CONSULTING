import PropTypes from 'prop-types';

import { forwardRef } from 'react'; // Имп

import { Container } from '@/components/Container';

const Hero = forwardRef(({ style }, ref) => {
  return (
    <section style={style} ref={ref}>
      <Container>
        <p>It is hero section</p>
      </Container>
    </section>
  );
});

Hero.displayName = 'Hero';

Hero.propTypes = {
  style: PropTypes.object,
};

export { Hero };
