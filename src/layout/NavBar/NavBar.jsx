'use client';

import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { LinkNavBar } from '@/components/LinkNavBar';
import { LinkPage } from '@/components/LinkPage';
import { ConnectButton } from '@/components/ConnectButton';
import { routes } from 'routes';
import data from '@/data/home/navigation.json';

export const NavBar = ({ menu = false, handleMenuToggle }) => {
  const { navBar, pages } = data;

  const pathname = usePathname();
  const isHome = pathname === routes.HOME || pathname === '/';

  return (
    <div
      className={`${
        menu ? 'flex xl:hidden' : 'hidden xl:flex'
      } flex-col w-[168px] xl:w-[117px] gap-[50px] xl:gap-8 relative xl:fixed xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-[608px] xl:-translate-y-1/2 xl:z-10 `}
    >
      <nav>
        <ul className="flex flex-col gap-6 xl:gap-2">
          {isHome
            ? navBar.map(({ label, link }) => (
                <LinkNavBar
                  key={label}
                  link={link}
                  label={label}
                  handleMenuToggle={handleMenuToggle}
                  isMobile={menu}
                />
              ))
            : pages.map(({ label, link }) => (
                <LinkPage
                  key={label}
                  link={link}
                  label={label}
                  handleMenuToggle={handleMenuToggle}
                />
              ))}
        </ul>
      </nav>
      <ConnectButton />
    </div>
  );
};

NavBar.propTypes = {
  handleMenuToggle: PropTypes.func,
  menu: PropTypes.bool,
};
