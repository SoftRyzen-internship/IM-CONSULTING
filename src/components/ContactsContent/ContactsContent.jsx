import { ContactsCard } from '../ContactsCard';
import { Form } from '../Form';
import data from '@/data/data.json';

export const ContactsContent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[64px] md:gap-[32px]">
      <ContactsCard />
      <div>
      <h2 className="mx-auto text-font24 font-light leading-[32px] mb-[32px] md:mb[36px] xl:mb-[48px]">
          <span className="text-accent">[ </span>
          <span className="mx-[12px] font-bold">{data.form.title}</span>
          <span className="text-accent"> ]</span>
        </h2>
        <Form />
      </div>      
    </div>
  );
};
