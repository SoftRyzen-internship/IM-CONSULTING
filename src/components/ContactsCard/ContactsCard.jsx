import { Socials } from '../Socials';
import { Title } from '../Title';
import contacts from '@/data/home/contacts.json';

export const ContactsCard = () => {
  return (
    <div className="w-[280px] md:w-[320px] xl:w-[480px]">
      <div className="mb-[64px] md:mb-[56px]">
        <Title
          tag="h3"
          className="contacts-title mx-auto mb-[32px] md:mb-[36px] xl:mb-[48px]"
        >
          {contacts.title}
        </Title>

        <ul>
          <li className="flex gap-[12px] mb-[32px] md:mb-[36px] xl:mb-[48px]">
            <h3 className="text-accent font-light">{contacts.phoneText}</h3>
            <ul>
              {contacts.phone.map(item => (
                <li key={item}>
                  <a
                    href={`tel:${item}`}
                    className="font-light first:mb-[4px] md:first:mb-[8px] hover:text-accent focus:text-accent transition duration-300"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex gap-[12px] mb-[32px] md:mb-[36px] xl:mb-[48px]">
            <h3 className="text-accent">{contacts.emailText}</h3>
            <a
              href={`mailto:${contacts.email}`}
              className="hover:text-accent focus:text-accent transition duration-300"
              rel="noreferrer noopener nofollow"
            >
              {contacts.email}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <Title
          tag="h3"
          className="contacts-title mx-auto mb-[32px] md:mb-[36px] xl:mb-[48px]"
        >
          {contacts.socials}
        </Title>
        <Socials component="footer" />
      </div>
    </div>
  );
};
