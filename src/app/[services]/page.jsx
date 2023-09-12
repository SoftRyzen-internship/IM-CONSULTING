import { ProgramInfo } from '@/sections/ProgramInfo';
import { ServicesHero } from '@/sections/ServicesHero';
import { getDictionary } from '@/utils/getDictionary';

export const dynamicParams = false;

export async function generateStaticParams({ params: { services } }) {
  return [{ services: services }];
}
export default async function ServicesPage({ params }) {
  const { services } = params;

  const servicesData = await getDictionary(services);

  return (
    <>
      <ServicesHero data={servicesData} />
      <ProgramInfo data={servicesData} />
    </>
  );
}
