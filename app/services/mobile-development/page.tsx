import React from 'react';
import MobileDevelopment from '@/app/pages/MobileDevelopment';
export const metadata = {
  title: 'Mobile App Development Services | iOS & Android Experts | PickZy',
  description: 'Expert mobile app development for iOS, Android & cross-platform. 100+ apps launched. Get a free consultation for your mobile project today.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'mobile app development company',
    'iOS app development',
    'Android app development',
    'React Native development',
    'Flutter app development',
    'custom mobile applications'
  ],
  openGraph: {
    title: 'Mobile App Development Services | PickZy',
    description: 'Native and cross-platform mobile app development for startups and enterprises',
    images: [
      {
        url: '/mobile-dev-og.jpg',
        width: 1200,
        height: 630,
        alt: 'PickZy Mobile App Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Experts | PickZy',
    description: 'Building high-performance iOS and Android applications since 2015',
  },
  alternates: {
    canonical: '/services/mobile-development',
  }
};

export default function MobileDevelopmentPage() {
  return <MobileDevelopment />;
}