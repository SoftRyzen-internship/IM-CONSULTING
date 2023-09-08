import { Container } from '@/components/Container';
import { ContactsContent } from '@/components/ContactsContent';
import { labelToLink } from '@/utils/labelToLink';
import contacts from '@/data/home/contacts.json';

export const Contacts = () => {
  const id = labelToLink('Контакти');

  return (
    <section
      id={id}
      className="bg-black text-bgColor py-[60px] md:py-[80px] xl:py-[120px]"
    >
      <Container>
        <h2 className="visually-hidden">{contacts.sectionTitle}</h2>
        <ContactsContent />
      </Container>
    </section>
  );
};
