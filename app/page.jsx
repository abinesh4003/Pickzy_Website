// app/page.js (server component)
import HomePage from '@/app/pages/HomePage'
import Script from 'next/script'

export const metadata = {
  title: 'Build with a Leading Software Development Company | PickZy',
  description: 'PickZy Interactive offers tailored software solutions in web, mobile, and enterprise development.',
  keywords: [
    'software development company',
    'custom software development',
    'web development',
    'mobile app development',
    'enterprise solutions'
  ],
  alternates: {
    canonical: 'https://pickzy.com/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: 'Build with a Leading Software Development Company | PickZy',
    description: 'PickZy Interactive offers tailored software solutions in web, mobile, and enterprise development.',
    url: 'https://pickzy.com',
    siteName: 'PickZy',
    images: [
      {
        url: 'https://pickzy.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Software Development Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build with a Leading Software Development Company | PickZy',
    description: 'PickZy Interactive offers tailored software solutions in web, mobile, and enterprise development.',
    images: ['https://pickzy.com/twitter-image.jpg'],
    creator: '@pickzytech',
  },
};

export default function Page() {
  return (
     <>
      {/* Schema.org JSON-LD for Organization */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PickZy Interactive",
            "url": "https://pickzy.com",
            "logo": "https://pickzy.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/pickzy",
              "https://www.instagram.com/pickzy",
              "https://www.linkedin.com/company/pickzy"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 44 4501 4466",
              "contactType": "customer service",
              "areaServed": "IN"
            }
          }),
        }}
      />
      <HomePage />
    </>
  )
}