import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';
import { Process } from '@/sections/Process';
import { Reviews } from '@/sections/Reviews';
import { Services } from '@/sections/Services';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Services />
      <Process />
      <Reviews />
    </>
  );
}
