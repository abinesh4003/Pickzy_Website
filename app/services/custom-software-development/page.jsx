import React from 'react';
import CustomSoftwareDevelopment from '@/app/pages/CustomSoftwareDevelopment';

export const metadata = {
  title: 'Custom Software Development Company | Enterprise Solutions | PickZy',
  description: 'PickZy builds tailored software solutions for businesses of all sizes. From web apps to complex enterprise systems, we deliver scalable, secure, and innovative custom software. 200+ successful projects.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'custom software development',
    'enterprise software solutions',
    'bespoke software development',
    'business application development',
    'custom web applications',
    'software development company',
    'scalable software solutions',
    'secure software development',
    'industry-specific software',
    'PickZy software developers'
  ],
  openGraph: {
    title: 'Custom Software Development Services | PickZy',
    description: 'Tailored software solutions designed for your unique business needs and workflows',
    url: 'https://pickzy.com/custom-software-development',
    images: [
      {
        url: '/images/custom-software-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Custom Software Development',
      },
    ],
    type: 'website',
    siteName: 'PickZy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Experts | PickZy',
    description: 'Building scalable, secure business solutions since 2015',
    images: ['/images/custom-software-twitter.jpg'],
    site: '@PickZyOfficial',
    creator: '@PickZyOfficial',
  },
  alternates: {
    canonical: 'https://pickzy.com/custom-software-development',
  },
  authors: [
    {
      name: 'PickZy',
      url: 'https://pickzy.com',
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CustomSoftwareDevelopmentPage() {
  return <CustomSoftwareDevelopment />;
}