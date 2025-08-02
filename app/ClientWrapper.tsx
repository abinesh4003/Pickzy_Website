// components/ClientWrapper.tsx
"use client";

import { usePathname } from 'next/navigation';
import AOSInit from '@/components/AOSInit';
import ScrollToTop from '@/components/scrollToTop';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AOSInit />
      {children}
      <ScrollToTop />
    </>
  );
}
