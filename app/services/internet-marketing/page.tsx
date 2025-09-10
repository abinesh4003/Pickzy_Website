import React from 'react';
import InternetMarketing from '@/app/pages/InternetMarketing';
import Script from 'next/script';
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
  return (
     <>
      <Script
        id="internet-marketing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Internet Marketing Services",
            description:
              "Boost online growth with Pickzy's data-driven internet marketing services—SEO, PPC, social media, email & CRO. Get measurable results.",
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
              "SEO Services",
              "Pay-Per-Click (PPC) Advertising",
              "Social Media Marketing",
              "Email Marketing",
              "Conversion Rate Optimization (CRO)",
              "Content Marketing",
              "Online Reputation Management",
              "Digital Advertising",
            ],
            url: "https://pickzy.com/internet-marketing",
            image: "https://pickzy.com/images/marketing-services-preview.jpg",
          }),
        }}
      />
      <InternetMarketing />
    </>
  );
}