import About from '@/app/pages/About';
import Script from 'next/script';
export const metadata = {
  title: 'About PickZy - Our Story & Team | Leading Software Developers',
  description:
    'Meet the team behind PickZy. Since 2015, we’ve delivered 300+ custom software solutions for businesses worldwide. Learn our story.',
  alternates: {
    canonical: 'https://pickzy.com/about-us',
  },
  openGraph: {
    title: 'About PickZy - Our Story & Team',
    description: 'Discover the people and values behind our software development success',
    images: [
      {
        url: 'https://pickzy.com/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy team photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PickZy - Our Story & Team',
    description: 'Discover the people and values behind our software development success',
    images: ['https://pickzy.com/about-og.jpg'],
    creator: '@pickzytech',
  },
};


export default function AboutUsPage() {
  return (
     <>
      {/*  Schema.org JSON-LD for AboutPage */}
      <Script
        id="schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://pickzy.com/about-us",
            "mainEntity": {
              "@type": "Organization",
              "name": "PickZy Interactive",
              "url": "https://pickzy.com",
              "logo": "https://pickzy.com/logo.png",
              "foundingDate": "2011",
              "sameAs": [
                "https://www.facebook.com/pickzy",
                "https://www.instagram.com/pickzy",
                "https://www.linkedin.com/company/pickzy"
              ],
              "founder": {
                "@type": "Person",
                "name": "Ratheesh", 
              }
            }
          }),
        }}
      />
      <About />
    </>
  );
}