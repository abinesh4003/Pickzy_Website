import Careers from '@/app/pages/Careers';
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
  return <Careers />;

}



