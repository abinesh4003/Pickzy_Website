import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AOSInit from '../components/AOSInit';
import ScrollToTop from '../components/scrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PickZy - Software Development & Digital Solutions',
  description: 'Leading software development company providing custom solutions, mobile apps, web development, and digital transformation services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <AOSInit/>
        {children}
        <ScrollToTop/>
        </body>
    </html>
  );
}
