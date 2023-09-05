import data from '@/data/data.json';

export const ContactsCard = () => {
  return (
    <div>
      <h2>{data.contacts.title}</h2>
      <ul>
        <li>
          <h3>{data.contacts.phoneText}</h3>
          <ul>
            {data.contacts.phone.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
        <li>
          <h3>{data.contacts.emailText}</h3>
          <p>{data.contacts.email}</p>
        </li>
        <li>
          <h3>{data.contacts.socials}</h3>
        </li>
      </ul>
    </div>
  );
};