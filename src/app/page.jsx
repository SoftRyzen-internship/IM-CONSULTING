import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';
import { Reviews } from '@/sections/Reviews';
import { Contacts } from '@/sections/Contacts';
import { Services } from '@/sections/Services';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Services />
      <Reviews />
      <Contacts />
    </>
  );
}
