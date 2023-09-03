import PropTypes from 'prop-types';

import Link from 'next/link';

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
    header:
      'text-black hover:text-white focus:text-white transition duration-300',
    burgerMenu:
      'text-accent hover:text-white focus:text-white transition duration-300',
    footer:
      'text-bgColor hover:text-accent focus:text-accent transition duration-300',
  };

  return (
    <ul className={listClass[component]}>
      <li className={itemClass[component]}>
        <Link
          href="#viber"
          target="_blank"
          rel="noreferrer noopener nofollow"
          aria-label="Viber"
          className={linkClass[component]}
        >
          <Viber className={itemClass[component]} />
        </Link>
      </li>
      <li className={itemClass[component]}>
        <Link
          href="#telegram"
          target="_blank"
          rel="noreferrer noopener nofollow"
          aria-label="Telegram"
          className={linkClass[component]}
        >
          <Telegram className={itemClass[component]} />
        </Link>
      </li>
    </ul>
  );
};

Socials.propTypes = {
  component: PropTypes.string.isRequired,
};
