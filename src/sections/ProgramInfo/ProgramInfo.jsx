import PropTypes from 'prop-types';

import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';

export const ProgramInfo = ({ data }) => {
  return (
    <section className="bg-black py-[60px] md:py-[80px] xl:py-[120px]">
      <Container>
        <h2 className="visually-hidden">{data.title}</h2>
        <Accordion items={data.items} />
      </Container>
    </section>
  );
};

ProgramInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
