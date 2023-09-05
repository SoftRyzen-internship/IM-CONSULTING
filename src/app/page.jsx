import { Hero } from '@/sections/Hero';
import { Reviews } from '@/sections/Reviews';
import { Services } from '@/sections/Services';

export default async function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Services />
    </>
  );
}
