import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';
import { Reviews } from '@/sections/Reviews';
import { Services } from '@/sections/Services';
import { ConsultingInfo } from '@/sections/ConsultingInfo';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Services />
      <Reviews />
      <ConsultingInfo />
    </>
  );
}
