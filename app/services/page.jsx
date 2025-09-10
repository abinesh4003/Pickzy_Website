import React from 'react';
import Services from '@/app/pages/Services';
import Script from 'next/script';

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
  return (
     <>
      {/* Schema.org JSON-LD for Services */}
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "PickZy Software Development Services",
            "url": "https://pickzy.com/services",
            "numberOfItems": 5,
            "itemListElement": [
              {
                "@type": "Service",
                "name": "Custom Software Development",
                "description": "Tailored software solutions for unique business needs.",
                "provider": {
                  "@type": "Organization",
                  "name": "PickZy Interactive",
                  "url": "https://pickzy.com"
                }
              },
              {
                "@type": "Service",
                "name": "Web Development",
                "description": "Responsive and scalable web applications.",
                "provider": {
                  "@type": "Organization",
                  "name": "PickZy Interactive",
                  "url": "https://pickzy.com"
                }
              },
              {
                "@type": "Service",
                "name": "Mobile App Development",
                "description": "iOS and Android mobile app solutions.",
                "provider": {
                  "@type": "Organization",
                  "name": "PickZy Interactive",
                  "url": "https://pickzy.com"
                }
              },
              {
                "@type": "Service",
                "name": "Cloud Computing Solutions",
                "description": "Cloud migration, deployment, and optimization.",
                "provider": {
                  "@type": "Organization",
                  "name": "PickZy Interactive",
                  "url": "https://pickzy.com"
                }
              },
              {
                "@type": "Service",
                "name": "IT Consulting & Digital Transformation",
                "description": "Guiding businesses through digital growth with strategy and innovation.",
                "provider": {
                  "@type": "Organization",
                  "name": "PickZy Interactive",
                  "url": "https://pickzy.com"
                }
              }
            ]
          }),
        }}
      />
      <Services />
    </>
  );
}