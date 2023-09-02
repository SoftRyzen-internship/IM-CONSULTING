import Link from 'next/link';
import LogoIcon from 'public/icons/logo.svg';
import { routes } from 'routes';

export const Logo = () => {
  return (
    <Link
      href={routes.HOME}
      aria-label="логотип"
      className="flex items-center px-[7px] py-[6px] w-[48px] h-[48px]"
    >
      <LogoIcon />
    </Link>
  );
};
