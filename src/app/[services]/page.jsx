import { getPage } from '@/utils/getPage';
import { getSeoPage } from '@/utils/getSeoPage';

import { ProgramInfo } from '@/sections/ProgramInfo';
import { ServicesHero } from '@/sections/ServicesHero';
import { routes } from 'routes';

import { TITLE, DESCRIPTION } from '../layout';

export const dynamicParams = false;

export async function generateMetadata({ params: { services } }) {
  const serviceSeoData = await getSeoPage(services);

  return {
    title: serviceSeoData?.title || TITLE,
    description: serviceSeoData?.description || DESCRIPTION,
    openGraph: {
      title: serviceSeoData?.title || TITLE,
      description: serviceSeoData?.description || DESCRIPTION,
      url: services,
      siteName: TITLE,
      locale: 'uk',
      type: 'website',
    },
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
