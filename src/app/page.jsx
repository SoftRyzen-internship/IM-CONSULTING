import { Hero } from '@/sections/Hero';
import { AboutCompany } from '@/sections/AboutCompany';
import { Services } from '@/sections/Services';
import { Partners } from '@/sections/Partners';
import { Reviews } from '@/sections/Reviews';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Services />
      <Partners />
      <Reviews />
    </>
  );
}
