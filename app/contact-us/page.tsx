import Contact from '@/app/pages/Contact';
import Script from 'next/script';

export const metadata = {
  title: 'Contact Us | PickZy Software Development Company',
  description: 'Get in touch with our software experts. Call +91 44 4501 4466 (India) or +1 213 261 0599 (US). Email sales@pickzy.com for inquiries.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'contact software developers',
    'custom software inquiry',
    'tech support contact',
    'software company phone number',
    'IT consulting email'
  ],
  openGraph: {
    title: 'Contact PickZy | Software Development Experts',
    description: 'Reach our team for custom software solutions, support, and consultations',
    images: [
      {
        url: '/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy contact information',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Our Software Team | PickZy',
    description: 'Get expert consultation for your custom software project',
  },
  alternates: {
    canonical: '/contact-us',
  }
};

export default function ContactPage() {
  return (
     <>
      {/* JSON-LD Schema for Contact Page */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'PickZy Software',
              url: 'https://pickzy.com',
              logo: 'https://pickzy.com/logo.png',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+91-44-4501-4466',
                  contactType: 'customer service',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Tamil'],
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-213-261-0599',
                  contactType: 'customer service',
                  areaServed: 'US',
                  availableLanguage: 'English',
                },
              ],
              email: 'sales@pickzy.com',
              sameAs: [
                'https://www.linkedin.com/company/pickzy/',
                'https://twitter.com/pickzytech',
                'https://www.facebook.com/pickzy',
              ],
            },
          }),
        }}
      />
      <Contact />
     
    </>
  );
}