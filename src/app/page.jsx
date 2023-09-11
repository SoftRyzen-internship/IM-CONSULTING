import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';
import { Reviews } from '@/sections/Reviews';
import { Services } from '@/sections/Services';
import { ProgramInfo } from '@/sections/ProgramInfo';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Services />
      <Reviews />
      <ProgramInfo />
    </>
  );
}
