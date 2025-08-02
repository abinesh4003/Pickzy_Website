import Portfolio from '@/app/pages/Portfolio';

export const metadata = {
  title: 'Our Portfolio | PickZy Software Development Case Studies',
  description: 'Explore 300+ successful projects we delivered for clients worldwide. See how we build custom software solutions for web, mobile, and enterprise applications.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'software development portfolio',
    'web app case studies',
    'mobile app projects',
    'enterprise software examples',
    'custom development work'
  ],
  openGraph: {
    title: 'PickZy Portfolio | Software Development Projects',
    description: 'Case studies of our custom software solutions for startups and enterprises',
    images: [
      {
        url: '/portfolio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy project showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Development Portfolio | PickZy',
    description: 'See our work building custom software for 200+ clients',
  },
  alternates: {
    canonical: '/portfolio',
  }
};

export default function PortfolioPage() {
  return <Portfolio />;
}