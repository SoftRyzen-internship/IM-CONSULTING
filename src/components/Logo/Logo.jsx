import Link from 'next/link';

import LogoIcon from 'public/icons/logo.svg';
import { routes } from 'routes';

export const Logo = () => {  
  return (
    <Link
      href={routes.HOME}      
      aria-label="логотип"
      className="flex items-center w-[48px] h-[48px] xl:w-[52px] xl:h-[52px] p-[6px] xl:p-0 text-white hover:text-accent focus-visible:text-accent transition duration-300 relative z-40"
    >
      <LogoIcon className="w-[36px] h-[36px] xl:w-[52px] xl:h-[52px]" />
    </Link>
  );
};
