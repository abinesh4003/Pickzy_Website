import React from 'react';
import InternetMarketing from '@/app/pages/InternetMarketing';
export const metadata = {
  title: 'Internet Marketing Services | SEO, PPC & Social Media | Pickzy',
  description: 'Boost online growth with Pickzy\'s data-driven internet marketing services—SEO, PPC, social media, email & CRO. Get measurable results. Free consultation!',
  openGraph: {
    title: 'Internet Marketing Services | SEO, PPC & Social Media | Pickzy',
    description: 'Boost online growth with Pickzy\'s data-driven internet marketing services—SEO, PPC, social media, email & CRO. Get measurable results.',
    url: 'https://pickzy.com/internet-marketing',
    images: [
      {
        url: 'https://pickzy.com/images/marketing-services-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Pickzy Internet Marketing Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internet Marketing Services | SEO, PPC & Social Media | Pickzy',
    description: 'Boost online growth with Pickzy\'s data-driven internet marketing services—SEO, PPC, social media, email & CRO. Get measurable results.',
    images: ['https://pickzy.com/images/marketing-services-preview.jpg'],
  },
  alternates: {
    canonical: 'https://pickzy.com/internet-marketing',
  },
};

export default function Page() {
  return <InternetMarketing />;
}