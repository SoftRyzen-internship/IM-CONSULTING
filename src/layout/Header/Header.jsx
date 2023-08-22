import PropTypes from 'prop-types';

import { Container } from '@/components';

export const Header = ({ data }) => {
  return (
    <header>
      <Container>
        <p>{data}</p>
      </Container>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.string.isRequired,
};
