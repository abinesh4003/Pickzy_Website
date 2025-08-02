import Contact from '@/app/pages/Contact';
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
    canonical: '/contact',
  }
};

export default function ContactPage() {
  return <Contact />;
}