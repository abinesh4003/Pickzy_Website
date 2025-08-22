import About from '@/app/pages/About';
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
  return <About/>;
}