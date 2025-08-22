import React from 'react';
import DigitalTransformation from '@/app/pages/DigitalTransformation'
export const metadata = {
  title: 'Digital Transformation Services | Business Automation & Tech Modernization',
  description: 'Future-proof your business with our digital transformation solutions - process automation, cloud migration, AI integration, and custom software development.',
  keywords: [
    'digital transformation',
    'business automation',
    'cloud migration',
    'AI integration',
    'legacy system modernization',
    'enterprise software',
    'process optimization',
    'technology consulting'
  ],
  openGraph: {
    title: 'Digital Transformation Services | Business Automation & Tech Modernization',
    description: 'Future-proof your business with our end-to-end digital transformation solutions and technology consulting.',
    url: 'https://pickzy.com/digital-transformation',
    images: [
      {
        url: '/images/digital-transformation-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Transformation Services by Pickzy',
      },
    ],
    type: 'website',
    siteName: 'Pickzy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transform Your Business with Digital Innovation',
    description: 'Expert digital transformation services for enterprises and growing businesses.',
    images: ['/images/digital-transformation-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://pickzy.com/digital-transformation',
  },
};

export default function Page() {
  return <DigitalTransformation />;
}