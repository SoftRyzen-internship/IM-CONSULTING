import localFont from 'next/font/local';

import { Header } from '@/layout/Header';
import '../styles/globals.css';

const formular = localFont({
  src: './fonts/formular/Formular.ttf',
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
        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
