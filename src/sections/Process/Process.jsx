import { Container } from '@/components/Container';
import { ProcessContent } from '@/components/ProcessContent';
import { labelToLink } from '@/helpers';

export const Process = () => {
  const id = labelToLink('Процес');

  return (
    <section id={id}>
      <Container className="py-[60px] md:py-[80px] xl:py-[120px]">
        <h2 className="sr-only">Process Section</h2>
        <ProcessContent />
      </Container>
    </section>
  );
};