import React from 'react';
import Services from '@/app/pages/Services';

export const metadata = {
  title: 'IT Services & Custom Software Development | PickZy',
  description: 'Expert software development services including web, mobile, cloud, cybersecurity, and digital transformation. 300+ successful projects delivered.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'custom software development',
    'web development services',
    'mobile app development company',
    'cloud computing solutions',
    'IT consulting services',
    'digital transformation experts'
  ],
  openGraph: {
    title: 'IT Services & Software Development Solutions | PickZy',
    description: 'Comprehensive technology services for businesses of all sizes. Custom solutions from industry experts.',
    images: [
      {
        url: '/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Software Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services | PickZy',
    description: 'End-to-end technology solutions for your business needs',
  },
  alternates: {
    canonical: '/services',
  }
};

export default function ServicesPage() {
  return <Services />;
}