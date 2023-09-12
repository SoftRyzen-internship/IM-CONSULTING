import { getPage } from '@/utils/getPage';

import { ProgramInfo } from '@/sections/ProgramInfo';
import { ServicesHero } from '@/sections/ServicesHero';

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
