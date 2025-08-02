import React from 'react';
import Blog from '@/app/pages/Blog'

export const metadata = {
  title: 'Blog | PickZy Software Development Insights & Tutorials',
  description: 'Discover the latest trends in software development, web technologies, and digital transformation from PickZy experts. Read our technical articles and case studies.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'software development blog',
    'web development tutorials',
    'technology trends',
    'coding best practices',
    'IT insights'
  ],
  openGraph: {
    title: 'PickZy Blog | Software Development Insights',
    description: 'Expert articles on web, mobile, cloud, and enterprise software development',
    images: [
      {
        url: '/blog-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Software Development Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PickZy Tech Blog',
    description: 'Cutting-edge insights on software development and digital transformation',
  },
  alternates: {
    canonical: '/blog',
  }
};

export default function BlogPage() {
  return <Blog />;
}