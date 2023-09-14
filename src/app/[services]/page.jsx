import { getPage } from '@/utils/getPage';

import { ProgramInfo } from '@/sections/ProgramInfo';
import { ServicesHero } from '@/sections/ServicesHero';
import { routes } from 'routes';

import { TITLE, DESCRIPTION } from '../layout';
import coaching from '@/data/services/coaching.json';
import consulting from '@/data/services/consulting.json';
import trainings from '@/data/services/trainings.json';
const servicesData = {
  coaching,
  consulting,
  trainings,
};

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const services = params.services;
  return {
    title: servicesData[services]?.hero?.title || TITLE,
    description: servicesData[services]?.hero?.description || DESCRIPTION,
  };
}

export async function generateStaticParams() {
  const staticParams = Object.values(routes).reduce((accumulator, path) => {
    if (path !== '/') {
      accumulator.push({ services: path.substring(1) });
    }
    return accumulator;
  }, []);

  return staticParams;
}

export default async function ServicesPage({ params: { services } }) {
  const servicesData = await getPage(services);

  return (
    <>
      <ServicesHero data={servicesData} />
      <ProgramInfo data={servicesData} />
    </>
  );
}
