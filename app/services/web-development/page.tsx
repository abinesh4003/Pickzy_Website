import React from 'react';
import WebDevelopment from '@/app/pages/WebDevelopment';
export const metadata = {
  title: 'Web Development Services | Custom Web Apps | PickZy',
  description: 'Expert web development services using React, Next.js, and modern frameworks. 150+ web projects delivered. Get a free consultation today.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'web development company',
    'custom web application development',
    'React development services',
    'Next.js experts',
    'full-stack web development',
    'responsive web design'
  ],
  openGraph: {
    title: 'Professional Web Development Services | PickZy',
    description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js',
    images: [
      {
        url: '/web-dev-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Experts | PickZy',
    description: 'Building high-performance web applications since 2015',
  },
  alternates: {
    canonical: '/services/web-development',
  }
};

export default function WebDevelopmentPage() {
  return <WebDevelopment />;
}