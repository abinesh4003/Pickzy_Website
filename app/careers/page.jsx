import Careers from '@/app/pages/Careers';
import Script from 'next/script';
export const metadata = {
  title: 'Careers at PickZy | Join Our Software Development Team',
  description: 'Build your career with PickZy. Explore developer jobs with competitive salaries, remote options, and cutting-edge projects. View open positions.',
  keywords: [
    'software developer jobs',
    'tech careers',
    'remote developer jobs',
    'engineering positions',
    'work at PickZy'
  ],
  alternates: {
    canonical: 'https://pickzy.com/careers',
  },
  openGraph: {
    title: 'Careers at PickZy | Join Our Software Development Team',
    description: 'We\'re hiring talented developers. Enjoy competitive benefits, flexible work, and meaningful projects.',
    images: [
      {
        url: 'https://pickzy.com/careers-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy team collaborating in office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'We\'re Hiring Developers | PickZy Careers',
    description: 'Join our team of 50+ engineers building innovative software solutions',
    images: ['https://pickzy.com/careers-og.jpg'],
    creator: '@pickzytech',
  },
};


export default function CareersPage() {
  return (
     <>
     {/* Schema Markup for Careers Page */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "name": "PickZy",
                "url": "https://pickzy.com",
                "logo": "https://pickzy.com/logo.png",
                "sameAs": [
                  "https://twitter.com/pickzytech",
                  "https://www.linkedin.com/company/pickzy",
                  "https://www.facebook.com/pickzy"
                ]
              },
              {
                "@type": "WebPage",
                "url": "https://pickzy.com/careers",
                "name": "Careers at PickZy | Join Our Software Development Team",
                "description": "Explore developer jobs with competitive salaries, remote options, and cutting-edge projects at PickZy.",
                "publisher": {
                  "@type": "Organization",
                  "name": "PickZy",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://pickzy.com/logo.png"
                  }
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://pickzy.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Careers",
                    "item": "https://pickzy.com/careers"
                  }
                ]
              }
            ]
          }),
        }}
      />
      <Careers />
      
    </>
  );

}



