import localFont from 'next/font/local';

import { Header } from '@/layout/Header';
import { NavBar } from '@/layout/NavBar';
import { Footer } from '@/layout/Footer';

import '../styles/globals.css';

const formular = localFont({
  src: [
    {
      path: './fonts/formular/Formular-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/formular/Formular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/formular/Formular-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/formular/Formular-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/formular/Formular-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-formular',
});

export const BASE_URL = 'https://im-consulting.vercel.app/';
export const TITLE = 'IM Consulting';
export const DESCRIPTION =
  'IM Consulting – ваш партнер у професійному тренінгу, консалтингу та коучингу. Наші експерти допомагають досягти успіху в бізнесі та особистому розвитку. Скористуйтесь нашими послугами для досягнення ваших цілей та потенціалу';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    siteName: TITLE,
    locale: 'uk',
    type: 'website',
  },
  metadataBase: new URL(BASE_URL),
  manifest: '/meta/manifest.webmanifest',
  robots: 'all',
  twitter: {
    card: 'summary_large_image',
  },
  // alternates: {
  //   canonical: BASE_URL,
  // },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={formular.variable}>
        <Header />
        <NavBar />
        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
