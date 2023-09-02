import PropTypes from 'prop-types';
import Telegram from 'public/icons/telegram.svg';
import Viber from 'public/icons/viber.svg';

export const Socials = ({ component }) => {
  const listClass = {
    header: 'flex gap-[16px]',
    burgerMenu: 'flex flex-col gap-[16px]',
    footer: 'flex flex-row-reverse gap-[8px]',
  };

  const itemClass = {
    header: 'w-[32px] h-[32px]',
    burgerMenu: 'w-[48px] h-[48px]',
    footer: 'w-[16px] h-[16px] md:w-[24px] md:h-[24px]',
  };

  const linkClass = {
    header: 'text-black hover:text-white',
    burgerMenu: 'text-accent hover:text-white',
    footer: 'text-bgColor hover:text-accent',
  };

  return (
    <>
      <ul className={listClass[component]}>
        <li className={itemClass[component]}>
          <a
            href="#viber"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="Viber"
            className={linkClass[component]}
          >
            <Viber className={itemClass[component]} />
          </a>
        </li>
        <li className={itemClass[component]}>
          <a
            href="#telegram"
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label="Telegram"
            className={linkClass[component]}
          >
            <Telegram className={itemClass[component]} />
          </a>
        </li>
      </ul>
    </>
  );
};

Socials.propTypes = {
  component: PropTypes.string,
};
