// components/ClientWrapper.tsx
"use client";

import { usePathname } from 'next/navigation';
import AOSInit from '@/components/AOSInit';
import ScrollToTop from '@/components/scrollToTop';
import { Toast } from '@/components/ui/toast';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AOSInit />
      {children}
      <ScrollToTop />
      <Toast/>
    </>
  );
}
