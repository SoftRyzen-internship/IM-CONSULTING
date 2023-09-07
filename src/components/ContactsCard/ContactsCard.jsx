import { Socials } from '../Socials';
import { Title } from '../Title';
import data from '@/data/data.json';

export const ContactsCard = () => {
  return (
    <div className="mx-auto w-[280px] md:w-[320px] xl:w-[480px]">
      <div className="mb-[64px] md:mb-[56px]">
        <Title
          tag="h2"
          className="contacts-title mx-auto mb-[32px] md:mb[36px] xl:mb-[48px]"
        >
          {data.contacts.title}
        </Title>
        <ul>
          <li className="flex gap-[12px] mb-[32px] md:mb[36px] xl:mb-[48px]">
            <h3 className="text-accent font-light">
              {data.contacts.phoneText}
            </h3>
            <ul>
              {data.contacts.phone.map(item => (
                <li key={item}>
                  <a
                    href={`tel:${item}`}
                    className="font-light first:mb-[4px] md:first:mb-[8px} hover:text-accent focus:text-accent transition duration-300"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="flex gap-[12px] mb-[32px] md:mb[36px] xl:mb-[48px]">
            <h3 className="text-accent">{data.contacts.emailText}</h3>
            <a
              href={`mailto:${data.contacts.email}`}
              className="hover:text-accent focus:text-accent transition duration-300"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              {data.contacts.email}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <Title
          tag="h2"
          className="contacts-title mx-auto mb-[32px] md:mb[36px] xl:mb-[48px]"
        >
          {data.contacts.socials}
        </Title>
        <Socials component="footer" />
      </div>
    </div>
  );
};
