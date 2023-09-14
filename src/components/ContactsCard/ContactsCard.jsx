import { Socials } from '../Socials';
import { Title } from '../Title';
import contacts from '@/data/home/contacts.json';

export const ContactsCard = () => {
  return (
    <div className="w-[280px] md:w-[311px] xl:w-[480px] flex-shrink-0">
      <Title
        tag="h3"
        className="contacts-title mx-auto mb-[32px] md:mb-[36px] xl:mb-[48px]"
      >
        {contacts.title}
      </Title>

      <ul className="mb-[64px] md:mb-[56px]">
        <li className="flex gap-[12px] mb-[32px] md:mb-[36px] xl:mb-[48px]">
          <h3 className="text-accent font-light">{contacts.phoneText}</h3>
          <ul>
            {contacts.phone.map(item => (
              <li key={item}>
                <a
                  href={`tel:${item}`}
                  className="font-light first:mb-[4px] md:first:mb-[8px] hover:text-accent focus:text-accent transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex gap-[12px]">
          <h3 className="text-accent font-light">{contacts.emailText}</h3>
          <a
            href={`mailto:${contacts.email}`}
            className="hover:text-accent focus:text-accent transition duration-300 font-light"
          >
            {contacts.email}
          </a>
        </li>
      </ul>

      <Title
        tag="h3"
        className="contacts-title mx-auto mb-[32px] md:mb-[36px] xl:mb-[48px]"
      >
        {contacts.socials.title}
      </Title>

      <Socials component="footer" />
    </div>
  );
};
