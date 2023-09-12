import { getDictionary } from '@/utils/getDictionary';

import { ProgramInfo } from '@/sections/ProgramInfo';
import { ServicesHero } from '@/sections/ServicesHero';

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
