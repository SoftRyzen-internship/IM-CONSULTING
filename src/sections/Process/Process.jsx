import { Container } from '@/components/Container';
import { ProcessContent } from '@/components/ProcessContent';
import { labelToLink } from '@/utils/labelToLink';

export const Process = () => {
  const id = labelToLink('Процес');

  return (
    <section
      id={id}
      className="py-[60px] md:py-[80px] xl:py-[120px] bg-bgColor"
    >
      <Container>
        <h2 className="visually-hidden">Process Section</h2>
        <ProcessContent />
      </Container>
    </section>
  );
};
