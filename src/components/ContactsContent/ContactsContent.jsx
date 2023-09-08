import { ContactsCard } from '../ContactsCard';
import { Form } from '../Form';
import { Title } from '../Title';
import form from '@/data/form.json';

export const ContactsContent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[64px] md:gap-[43px] xl:gap-[32px]">
      <ContactsCard />
      <div className="max-w-[440px] md:max-w-[500px]">
        <Title
          tag="h3"
          className="contacts-title mb-[32px] md:mb-[36px] xl:mb-[48px] w-[280px] md:w-[342px] xl:w-[500px]"
        >
          {form.title}
        </Title>
        <Form />
      </div>
    </div>
  );
};
