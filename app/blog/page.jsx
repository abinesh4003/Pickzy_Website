import React from 'react';
import Blog from '@/app/pages/Blog'
import Script from 'next/script';

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
   return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "PickZy Blog",
            "url": "https://pickzy.com/blog",
            "description": "Discover the latest trends in software development, web technologies, and digital transformation from PickZy experts. Read our technical articles and case studies.",
            "publisher": {
              "@type": "Organization",
              "name": "PickZy",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pickzy.com/images/logo.png"
              }
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Example Blog Post Title",
                "description": "Short description of this blog post.",
                "url": "https://pickzy.com/blog/example-post",
                "author": {
                  "@type": "Person",
                  "name": "PickZy"
                },
                "datePublished": "2025-09-02",
                "dateModified": "2025-09-02",
                "image": "https://pickzy.com/images/blog-og.jpg"
              }
              // Add more blogPost objects for each post if desired
            ]
          }),
        }}
      />
      <Blog />
    </>
  );
}