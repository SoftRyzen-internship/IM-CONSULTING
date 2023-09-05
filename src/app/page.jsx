import { Hero } from '@/sections/Hero';
import { Reviews } from '@/sections/Reviews';
import { Contacts } from '@/sections/Contacts';

export default async function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Contacts />
    </>
  );
}
