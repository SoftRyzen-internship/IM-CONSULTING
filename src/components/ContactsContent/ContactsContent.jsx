import { ContactsCard } from '../ContactsCard';
import { Form } from '../Form';
import { Title } from '../Title';
import data from '@/data/data.json';

export const ContactsContent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[64px] md:gap-[32px]">
      <ContactsCard />
      <div>
        <Title
          tag="h2"
          className="contacts-title mx-auto mb-[32px] md:mb[36px] xl:mb-[48px] w-[280px] md:w-[342px] xl:w-[500px]"
        >
          {data.form.title}
        </Title>
        <Form />
      </div>
    </div>
  );
};
