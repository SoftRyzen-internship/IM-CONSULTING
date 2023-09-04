import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
    </>
  );
}
