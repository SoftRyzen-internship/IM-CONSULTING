import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';
import { Reviews } from '@/sections/Reviews';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Reviews />
    </>
  );
}
