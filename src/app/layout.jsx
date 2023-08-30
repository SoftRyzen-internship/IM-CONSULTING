import { Inter } from 'next/font/google';

import { Header } from '@/layout/Header';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  // metadataBase: new URL('https://example.vercel.app/'),
  title: 'Title',
  description: 'Description',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />

        <main className="flex flex-col items-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
