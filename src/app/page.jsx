import { Hero } from '@/sections/Hero';
import { Process } from '@/sections/Process';
import { Reviews } from '@/sections/Reviews';

export default async function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Reviews />
    </>
  );
}
