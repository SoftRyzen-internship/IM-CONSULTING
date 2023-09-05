import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';
import { routes } from 'routes';

export const Logo = () => {
  return (
    <div className="w-[48px] h-[48px] xl:w-[52px] xl:h-[52px] p-[6px] xl:p-0">
      <Link
        href={routes.HOME}
        aria-label="логотип"
        className="flex items-center
      w-[36px] h-[36px] xl:w-[52px] xl:h-[52px]
      text-white hover:text-accent focus:text-accent duration-300"
      >
        <LogoIcon />
      </Link>
    </div>
  );
};
