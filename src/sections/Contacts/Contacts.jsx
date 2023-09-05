import { Container } from '@/components/Container';
import { ContactsContent } from '@/components/ContactsContent';
import { labelToLink } from '@/helpers';

export const Contacts = () => {
  const id = labelToLink('Контакти');
  return (
    <section id={id} className="bg-black text-bgColor py-[60px] md:py-[80px] xl:py-[120px]">
      <Container className="">
        <ContactsContent />
      </Container>
    </section>
  );
};
