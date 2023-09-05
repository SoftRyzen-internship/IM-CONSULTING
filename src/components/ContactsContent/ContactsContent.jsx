import { ContactsCard } from '../ContactsCard';

export const ContactsContent = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[64px] md:gap-[43px] xl:gap-[32px]'>
      <ContactsCard />
      <div>Форма</div>
    </div>
  );
};
