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

export const metadata = {
  // metadataBase: new URL('https://example.vercel.app/'),
  title: 'Title',
  description: 'Description',
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
