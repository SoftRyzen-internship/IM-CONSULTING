import { Inter } from 'next/font/google';

import { Header } from '@/layout';

import { getMetaByLang } from '@/utils/getMetaData';
import { getDictionary } from '@/utils/getDictionary';
import { i18n } from 'i18n';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }) {
  const metaDictionary = await getMetaByLang(params.lang);

  return {
    title: metaDictionary.title,
    description: metaDictionary.description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export default async function RootLayout({ children, params: { lang } }) {
  const localeData = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header data={localeData.title} />

        <main className="flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
