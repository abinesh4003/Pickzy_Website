import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientWrapper from '@/app/ClientWrapper';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://pickzy.com'),
  title: {
    default: 'PickZy - Software Development & Digital Solutions',
    template: '%s | PickZy',
  },
  description:
    'Leading software development company providing custom solutions, mobile apps, web development, and digital transformation services.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          id="tawk-script"
          dangerouslySetInnerHTML={{
            __html: `
              var $_Tawk_API={},$_Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/5522523aa329e2c841f9fa57/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}