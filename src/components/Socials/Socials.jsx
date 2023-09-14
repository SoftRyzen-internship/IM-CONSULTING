import PropTypes from 'prop-types';
import React from 'react';

import data from '@/data/home/contacts.json';

import Facebook from '/public/icons/facebook.svg';
import Instagram from '/public/icons/instagram.svg';
import Telegram from '/public/icons/telegram.svg';
import Viber from '/public/icons/viber.svg';

export const Socials = ({ component }) => {
  const listClass = {
    header: 'flex gap-[24px]',
    burgerMenu: 'flex flex-col gap-[24px]',
    footer: 'flex gap-[24px]',
  };

  const itemClass = {
    header: 'w-[36px] h-[36px] flex items-center justify-center',
    burgerMenu: 'w-[48px] h-[48px] flex items-center justify-center',
    footer:
      'w-[48px] h-[48px] xl:w-[36px] xl:h-[36px] flex items-center justify-center',
  };

  const linkClass = {
    header:
      'text-black hover:text-white focus:text-white transition duration-300',
    burgerMenu:
      'text-white hover:text-accent focus:text-accent transition duration-300',
    footer:
      'text-bgColor hover:text-accent focus:text-accent transition duration-300',
  };

  const svgClass = {
    Telegram: 'w-[30px] h-[28px]',
    Viber: 'w-[28px] h-[28px]',
    Instagram: 'w-[28px] h-[28px]',
    Facebook: 'w-[16px] h-[28px]',
  };

  const socialIcons = {
    Telegram,
    Viber,
    Instagram,
    Facebook,
  };

  return (
    <ul className={listClass[component]}>
      {data.socials.links.map(social => (
        <li key={social.name} className={itemClass[component]}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener nofollow"
            aria-label={social['aria-label']}
            className={linkClass[component]}
          >
            {socialIcons[social.name]
              ? React.createElement(socialIcons[social.name], {
                  className: svgClass[social.name],
                })
              : null}
          </a>
        </li>
      ))}
    </ul>
  );
};

Socials.propTypes = {
  component: PropTypes.oneOf(['header', 'burgerMenu', 'footer']).isRequired,
};
