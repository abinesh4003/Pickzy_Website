import React from 'react';
import MobileDevelopment from '@/app/pages/MobileDevelopment';
import Script from 'next/script';
export const metadata = {
  title: 'Mobile App Development Services | iOS & Android Experts | PickZy',
  description: 'Expert mobile app development for iOS, Android & cross-platform. 100+ apps launched. Get a free consultation for your mobile project today.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'mobile app development company',
    'iOS app development',
    'Android app development',
    'React Native development',
    'Flutter app development',
    'custom mobile applications'
  ],
  openGraph: {
    title: 'Mobile App Development Services | PickZy',
    description: 'Native and cross-platform mobile app development for startups and enterprises',
    images: [
      {
        url: '/mobile-dev-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Mobile App Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Experts | PickZy',
    description: 'Building high-performance iOS and Android applications since 2015',
  },
  alternates: {
    canonical: 'https://pickzy.com/mobile-apps-development',
  }
};

export default function MobileDevelopmentPage() {
  return (
     <>
      <MobileDevelopment />

      {/* JSON-LD Schema */}
      <Script id="mobile-dev-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Mobile App Development",
          "provider": {
            "@type": "Organization",
            "name": "PickZy",
            "url": "https://pickzy.com",
            "logo": "https://pickzy.com/logo.png"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "description": "Expert mobile app development for iOS, Android & cross-platform. 100+ apps launched. Get a free consultation for your mobile project today.",
          "offers": {
            "@type": "Offer",
            "url": "https://pickzy.com/mobile-apps-development",
            "priceCurrency": "USD",
            "price": "0.0",
            "eligibleRegion": {
              "@type": "Place",
              "name": "Global"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://pickzy.com/mobile-apps-development"
          }
        })}
      </Script>
    </>
  );
}