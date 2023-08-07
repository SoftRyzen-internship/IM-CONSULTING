import { Inter } from 'next/font/google';

import { getMetaByLang } from '@/utils/getMetaData';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }, parent) {
  const lang = params.lang;

  const metaDictionary = await getMetaByLang(params.lang);

  return {
    title: metaDictionary.title,
    description: metaDictionary.description,
  };
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
