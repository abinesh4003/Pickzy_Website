import React from 'react';
import DesignAndMarkup from '@/app/pages/DesignAndMarkup';
import Script from 'next/script';

export const metadata = {
  title: 'Professional Design to Code Services | PSD/Figma to HTML Experts | PickZy',
  description: 'PickZy converts your designs into pixel-perfect, responsive HTML/CSS/JS code. Specializing in PSD/Figma to HTML, landing page development, and UI/UX implementation. 150+ projects delivered.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'PSD to HTML',
    'Figma to HTML',
    'design to code service',
    'responsive web markup',
    'pixel-perfect HTML conversion',
    'landing page development',
    'UI/UX implementation',
    'frontend markup services',
    'W3C validated HTML',
    'cross-browser compatible CSS',
    'PickZy design conversion'
  ],
  openGraph: {
    title: 'Design to Code Conversion Services | PickZy',
    description: 'Expert PSD/Figma to HTML conversion with responsive implementation and W3C validated markup',
    url: 'https://pickzy.com/design-and-markup',
    images: [
      {
        url: '/images/design-markup-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Design to Code Conversion Services',
      },
    ],
    type: 'website',
    siteName: 'PickZy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PSD/Figma to HTML Conversion Experts | PickZy',
    description: 'Turning designs into clean, responsive code with perfect pixel implementation',
    images: ['/images/design-markup-twitter.jpg'],
    site: '@PickZyOfficial',
    creator: '@PickZyOfficial',
  },
  alternates: {
    canonical: 'https://pickzy.com/design-and-markup',
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

export default function DesignAndMarkupPage() {
return (
    <>
      {/* Service Schema Markup */}
      <Script
        id="schema-design-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Design to Code Conversion (PSD/Figma to HTML)",
            "provider": {
              "@type": "Organization",
              "name": "PickZy Interactive",
              "url": "https://pickzy.com",
              "logo": "https://pickzy.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/pickzy",
                "https://www.instagram.com/pickzy",
                "https://www.linkedin.com/company/pickzy"
              ]
            },
            "areaServed": {
              "@type": "Place",
              "name": "Global"
            },
            "description":
              "PickZy converts your designs (PSD, Figma, Sketch, XD) into pixel-perfect, responsive HTML/CSS/JS code with W3C validation, cross-browser compatibility, and SEO-friendly markup.",
            "url": "https://pickzy.com/design-and-markup"
          }),
        }}
      />
      <DesignAndMarkup />
    </>
  );
}