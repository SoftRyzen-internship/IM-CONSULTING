import { getPage } from '@/utils/getPage';

import { ProgramInfo } from '@/sections/ProgramInfo';
import { ServicesHero } from '@/sections/ServicesHero';

export const dynamicParams = false;

export async function generateStaticParams({ params: { locale } }) {
  return [{ services: locale }, { services: locale }, { services: locale }];
}

export default async function ServicesPage({ params }) {
  const { services } = params;

  const servicesData = await getPage(services);

  return (
    <>
      <ServicesHero data={servicesData} />
      <ProgramInfo data={servicesData} />
    </>
  );
}
