import { AboutCompany } from '@/sections/AboutCompany';
import { Hero } from '@/sections/Hero';
import { Reviews } from '@/sections/Reviews';
import { Services } from '@/sections/Services';
import { ConsultingInfo } from '@/sections/ConsultingInfo';
import { TrainingsInfo } from '@/sections/TrainingsInfo';
import { CoachingInfo } from '@/sections/CoachingInfo';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutCompany />
      <Services />
      <Reviews />
      <ConsultingInfo />
      <TrainingsInfo />
      <CoachingInfo />
    </>
  );
}
