import React from 'react';
import DigitalTransformation from '@/app/pages/DigitalTransformation'
import Script from 'next/script';
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
  return (
        <>
      <Script
        id="digital-transformation-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Digital Transformation Services",
            description:
              "Future-proof your business with digital transformation solutions - process automation, cloud migration, AI integration, and custom software development.",
            provider: {
              "@type": "Organization",
              name: "Pickzy",
              url: "https://pickzy.com",
              logo: "https://pickzy.com/images/logo.png",
            },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            serviceType: [
              "Digital Transformation",
              "Business Automation",
              "Cloud Migration",
              "AI Integration",
              "Legacy System Modernization",
              "Enterprise Software",
              "Process Optimization",
              "Technology Consulting",
            ],
            url: "https://pickzy.com/digital-transformation",
            image: "https://pickzy.com/images/digital-transformation-og.jpg",
          }),
        }}
      />
      <DigitalTransformation />
    </>
  )
}