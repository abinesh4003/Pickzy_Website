import React from 'react';
import DesktopApplicationDevelopment from '@/app/pages/DesktopApplicationDevelopment';
import Script from 'next/script';

export const metadata = {
  title: 'Custom Desktop Application Development Services | Windows, macOS, Linux | PickZy',
  description: 'Expert desktop app development for Windows, macOS & Linux. PickZy builds secure, high-performance applications using Electron, .NET MAUI, Flutter Desktop & native technologies. 150+ projects delivered.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'desktop application development',
    'windows app development',
    'macOS app development',
    'linux app development',
    'electron js development',
    '.NET desktop applications',
    'cross-platform desktop apps',
    'enterprise software development',
    'custom desktop software',
    'native application development',
    'PickZy desktop app developers'
  ],
  openGraph: {
    title: 'Professional Desktop Application Development Services | PickZy',
    description: 'PickZy builds custom desktop applications for Windows, macOS and Linux using modern technologies like Electron, .NET MAUI and Flutter Desktop.',
    url: 'https://pickzy.com/desktop-application-development',
    images: [
      {
        url: '/images/desktop-app-development-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Desktop Application Development Services',
      },
    ],
    type: 'website',
    siteName: 'PickZy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Desktop App Development for All Platforms | PickZy',
    description: 'PickZy developers building Windows, macOS and Linux applications with Electron, .NET and native technologies.',
    images: ['/images/desktop-app-development-twitter.jpg'],
    site: '@PickZyOfficial', 
    creator: '@PickZyOfficial',
  },
  alternates: {
    canonical: 'https://pickzy.com/desktop-application-development',
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

export default function DesktopApplicationDevelopmentPage() {
return (
    <>
      <DesktopApplicationDevelopment />

      {/* JSON-LD Schema inside <Script> */}
      <Script
        id="desktop-app-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "PickZy - Desktop Application Development",
            "url": "https://pickzy.com/desktop-application-development",
            "logo": "https://pickzy.com/images/logo.png",
            "description":
              "PickZy builds custom desktop applications for Windows, macOS and Linux using Electron, .NET MAUI and Flutter Desktop.",
            "sameAs": [
              "https://twitter.com/PickZyOfficial",
              "https://www.linkedin.com/company/pickzy",
              "https://facebook.com/pickzyofficial"
            ],
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "20.5937",
                "longitude": "78.9629"
              },
              "geoRadius": "2000"
            },
            "serviceType": "Custom Desktop Application Development",
            "offers": {
              "@type": "Offer",
              "url": "https://pickzy.com/desktop-application-development",
              "priceCurrency": "USD",
              "eligibleRegion": {
                "@type": "Country",
                "name": "Worldwide"
              },
              "availability": "https://schema.org/InStock"
            },
            "author": {
              "@type": "Organization",
              "name": "PickZy",
              "url": "https://pickzy.com"
            }
          }),
        }}
      />
    </>
  );
}