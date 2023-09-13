import { getPage } from '@/utils/getPage';

import { ProgramInfo } from '@/sections/ProgramInfo';
import { ServicesHero } from '@/sections/ServicesHero';
import { routes } from 'routes';

export const dynamicParams = false;

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
