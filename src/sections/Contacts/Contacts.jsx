import { Container } from '@/components/Container';
import { ContactsContent } from '@/components/ContactsContent';
import { labelToLink } from '@/utils/labelToLink';

export const Contacts = () => {
  const id = labelToLink('Контакти');

  return (
    <section
      id={id}
      className="bg-black text-bgColor py-[60px] md:py-[80px] xl:py-[120px]"
    >
      <Container>
        <ContactsContent />
      </Container>
    </section>
  );
};
