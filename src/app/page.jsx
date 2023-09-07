import { Hero } from '@/sections/Hero';
import { AboutCompany } from '@/sections/AboutCompany';
import { Services } from '@/sections/Services';
import { Process } from '@/sections/Process';
import { Reviews } from '@/sections/Reviews';

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
